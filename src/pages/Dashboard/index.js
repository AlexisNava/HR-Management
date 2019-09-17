import React, { memo, Fragment, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';

// Components
import NavBar from '../../components/NavBar';
import DrawerActions from '../../components/DrawerActions';

// Styles
import './Dashboard.css';

const Dashboard = memo(() => {
  const isAdMin = useSelector(state => state.user.get('isAdmin'));

  const [drawerActionsIsOpen, setDrawerActionsIsOpen] = useState(false);

  const changeDrawerIsOpen = useCallback(() => {
    setDrawerActionsIsOpen(currentState => !currentState);
  }, [drawerActionsIsOpen, setDrawerActionsIsOpen]);

  return (
    <Fragment>
      <DrawerActions isOpen={drawerActionsIsOpen} />

      <NavBar openDrawerActions={changeDrawerIsOpen} />

      <h1>{isAdMin ? 'Admin' : 'Employee'} Dashboard</h1>
    </Fragment>
  );
});

export default Dashboard;
