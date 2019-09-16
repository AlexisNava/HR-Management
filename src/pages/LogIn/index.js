import React, { memo } from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Styles
import './LogIn.css';

const LogIn = memo(() => (
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
            id="outlined-name"
            label="Name"
            value=""
            margin="normal"
            variant="outlined"
          />
        </div>

        <div className="form__element">
          <TextField
            fullWidth
            id="outlined-name"
            label="Password"
            value=""
            margin="normal"
            variant="outlined"
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
));

export default LogIn;
