import React, { memo } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Icons
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

const NavBar = memo(() => {
  return (
    <AppBar position="fixed">
      <div>
        <div>
          <div>
            <SupervisorAccountIcon />
          </div>

          <div>
            <Typography variant="h6">HR Management</Typography>
          </div>
        </div>

        <div>
          <div>
            <Button color="inherit">Position</Button>
          </div>

          <div>
            <Button color="inherit">Team</Button>
          </div>

          <div>
            <Button color="inherit">Employee</Button>
          </div>

          <div>
            <Button color="inherit">Log Out</Button>
          </div>
        </div>
      </div>
    </AppBar>
  );
});

export default NavBar;
