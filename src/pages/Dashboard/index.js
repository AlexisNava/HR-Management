import React, { memo, Fragment, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import NavBar from '../../components/NavBar';
import DrawerActions from '../../components/DrawerActions';
import TeamList from '../../components/TeamList';
import AddNewDialog from '../../components/AddNewDialog';
import EmployeeDialog from '../../components/EmployeeDialog';

// Services
import { addTeam } from '../../services';

// Action Crators
import { showNotification } from '../../store/modules/notification/actionCreators';
import { logOut } from '../../store/modules/user/actionCreators';
import { requestAddPosition } from '../../store/modules/employeeUtils/actionCreators';

// Styles
import './Dashboard.css';

const Dashboard = memo(() => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.get('token'));

  // States
  const [drawerActionsIsOpen, setDrawerActionsIsOpen] = useState(false);
  const [positionDialogIsOpen, setPositionDialogIsOpen] = useState(false);
  const [teamDialogIsOpen, setTeamDialogIsOpen] = useState(false);
  const [employeeDialogIsOpen, setEmployeeDialogIsOpen] = useState(false);

  // Requests
  const addTeamRequest = async teamName => {
    try {
      await addTeam(teamName, token);

      dispatch(showNotification({ message: 'Added new team succesfully' }));
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.errorMessage === 'jwt expired'
      ) {
        dispatch(logOut());
      }

      dispatch(
        showNotification({
          message: 'Failure trying to add a new team. Verify your information.',
        }),
      );
    }
  };

  // Callbacks
  const changeDrawerIsOpen = useCallback(() => {
    setDrawerActionsIsOpen(currentState => !currentState);
  }, [setDrawerActionsIsOpen]);

  const changePositionDialogIsOpen = useCallback(() => {
    setPositionDialogIsOpen(currentState => !currentState);
  }, [setPositionDialogIsOpen]);

  const changeTeamDialogIsOpen = useCallback(() => {
    setTeamDialogIsOpen(currentState => !currentState);
  }, [setTeamDialogIsOpen]);

  const changeEmmployeeDialogIsOpen = useCallback(() => {
    setEmployeeDialogIsOpen(currentState => !currentState);
  }, [setEmployeeDialogIsOpen]);

  const dispatchAddPosition = useCallback(
    positionName => {
      dispatch(requestAddPosition(positionName));
    },
    [dispatch],
  );

  return (
    <Fragment>
      <DrawerActions
        isOpen={drawerActionsIsOpen}
        closeDrawerActions={changeDrawerIsOpen}
        openPositionDialog={changePositionDialogIsOpen}
        openTeamDialog={changeTeamDialogIsOpen}
        openEmployeeDialog={changeEmmployeeDialogIsOpen}
      />

      <AddNewDialog
        isOpen={positionDialogIsOpen}
        title="Position"
        closeDialog={changePositionDialogIsOpen}
        request={dispatchAddPosition}
      />

      <AddNewDialog
        isOpen={teamDialogIsOpen}
        title="Team"
        closeDialog={changeTeamDialogIsOpen}
        request={addTeamRequest}
      />

      <EmployeeDialog
        isOpen={employeeDialogIsOpen}
        closeDialog={changeEmmployeeDialogIsOpen}
      />

      <NavBar
        openDrawerActions={changeDrawerIsOpen}
        openPositionDialog={changePositionDialogIsOpen}
        openTeamDialog={changeTeamDialogIsOpen}
        openEmployeeDialog={changeEmmployeeDialogIsOpen}
      />

      <TeamList />
    </Fragment>
  );
});

export default Dashboard;
