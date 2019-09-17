import React, { memo } from 'react';
import { Redirect } from 'react-router-dom';

const Dashboard = memo(({ isAdmin }) => {
  if (isAdmin) {
    return <h1>{isAdmin ? 'Admin' : 'Employee'} Dashboard </h1>;
  }

  return <Redirect to="/login" />;
});

export default Dashboard;
