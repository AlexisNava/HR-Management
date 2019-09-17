import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';

// Action Creators
import { logOut } from '../../store/modules/user/actionCreators';

const Dashboard = memo(() => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Dashboard </h1>

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
