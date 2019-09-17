import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Action Creators
import { logIn } from '../../store/modules/user/actionCreators';

// Styles
import './LogIn.css';

const LogIn = memo(() => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex-container flex-container--center-content">
      <Paper>
        <div className="form flex-container flex-container--vertical-alignment">
          <div className="form__element form__element--text">
            <Typography variant="h5">HR Management</Typography>
          </div>

          <div className="form__element form__element--text">
            <Typography variant="h6">Log In</Typography>
          </div>

          <div className="form__element">
            <TextField
              fullWidth
              label="Email"
              type="text"
              margin="normal"
              variant="outlined"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </div>

          <div className="form__element">
            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              variant="outlined"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </div>

          <div className="form__element">
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => {
                if (email && password) {
                  return dispatch(logIn(email, password));
                }
              }}
            >
              Log In
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
});

export default LogIn;
