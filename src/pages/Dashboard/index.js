import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';

// Components
import NavBar from '../../components/NavBar';

// Action Creators
import { logOut } from '../../store/modules/user/actionCreators';

const Dashboard = memo(() => {
  const dispatch = useDispatch();
  const isAdMin = useSelector(state => state.user.get('isAdmin'));

  console.log('isAdMin', isAdMin);

  return (
    <div>
      <NavBar />

      <h1>{isAdMin ? 'Admin' : 'Employee'} Dashboard</h1>

      <Button
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Log Out
      </Button>
    </div>
  );
});

export default Dashboard;
