import React, { memo, Fragment } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

// MUI Components
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';

// Icons
import CloseIcon from '@material-ui/icons/Close';

// Action Creators
import { logOut } from '../store/modules/user/actionCreators';

const DrawerActions = memo(
  ({
    isOpen,
    closeDrawerActions,
    openPositionDialog,
    openTeamDialog,
    openEmployeeDialog,
  }) => {
    const dispatch = useDispatch();

    const isAdmin = useSelector(state => state.user.get('isAdmin'));

    return (
      <Drawer open={isOpen}>
        <List>
          <ListItem button onClick={() => closeDrawerActions()}>
            <ListItemIcon>
              <CloseIcon />
            </ListItemIcon>
          </ListItem>

          <Divider />

          {isAdmin && (
            <Fragment>
              <ListItem button onClick={() => openPositionDialog()}>
                <ListItemText primary="Position" />
              </ListItem>

              <ListItem button onClick={() => openTeamDialog()}>
                <ListItemText primary="Team" />
              </ListItem>

              <ListItem button onClick={() => openEmployeeDialog()}>
                <ListItemText primary="Employee" />
              </ListItem>
            </Fragment>
          )}

          <ListItem button onClick={() => dispatch(logOut())}>
            <ListItemText primary="Log Out" />
          </ListItem>
        </List>
      </Drawer>
    );
  },
);

DrawerActions.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeDrawerActions: PropTypes.func.isRequired,
  openPositionDialog: PropTypes.func.isRequired,
  openTeamDialog: PropTypes.func.isRequired,
  openEmployeeDialog: PropTypes.func.isRequired,
};

export default DrawerActions;
