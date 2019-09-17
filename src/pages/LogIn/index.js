import React, { memo } from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Hooks
import { useTextFields } from '../../hooks';

// Styles
import './LogIn.css';

const LogIn = memo(() => {
  const [values, handleChange] = useTextFields({
    email: '',
    password: '',
  });

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
              value={values.name}
              onChange={handleChange}
            />
          </div>

          <div className="form__element">
            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              variant="outlined"
              value={values.name}
              onChange={handleChange}
            />
          </div>

          <div className="form__element">
            <Button fullWidth variant="contained" color="primary">
              Log In
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
});

export default LogIn;
