import React, { memo, Fragment } from 'react';
import { useSelector } from 'react-redux';

// Components
import NavBar from '../../components/NavBar';
import DrawerActions from '../../components/DrawerActions';

// Styles
import './Dashboard.css';

const Dashboard = memo(() => {
  const isAdMin = useSelector(state => state.user.get('isAdmin'));

  console.log('isAdMin', isAdMin);

  return (
    <Fragment>
      <DrawerActions />

      <NavBar />

      <h1>{isAdMin ? 'Admin' : 'Employee'} Dashboard</h1>
    </Fragment>
  );
});

export default Dashboard;
