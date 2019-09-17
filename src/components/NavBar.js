import React, { memo } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Icons
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

const NavBar = memo(() => {
  return (
    <AppBar>
      <div>
        <div>
          <div>
            <SupervisorAccountIcon />
          </div>

          <div>
            <Typography>HR Management</Typography>
          </div>
        </div>

        <div>
          <div>
            <Button>Position</Button>
          </div>

          <div>
            <Button>Team</Button>
          </div>

          <div>
            <Button>Employee</Button>
          </div>

          <div>
            <Button>Log Out</Button>
          </div>
        </div>
      </div>
    </AppBar>
  );
});

export default NavBar;
