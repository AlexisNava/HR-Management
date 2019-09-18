import React, { memo, Fragment, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';

// Components
import NavBar from '../../components/NavBar';
import DrawerActions from '../../components/DrawerActions';
import TeamList from '../../components/TeamList';

// Styles
import './Dashboard.css';

const Dashboard = memo(() => {
  const [drawerActionsIsOpen, setDrawerActionsIsOpen] = useState(false);

  const changeDrawerIsOpen = useCallback(() => {
    setDrawerActionsIsOpen(currentState => !currentState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawerActionsIsOpen, setDrawerActionsIsOpen]);

  return (
    <Fragment>
      <DrawerActions
        isOpen={drawerActionsIsOpen}
        closeDrawerActions={changeDrawerIsOpen}
      />

      <NavBar openDrawerActions={changeDrawerIsOpen} />

      <TeamList />
    </Fragment>
  );
});

export default Dashboard;
