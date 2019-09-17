import React, { memo } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Icons
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

const NavBar = memo(() => {
  return (
    <AppBar position="static" className="navbar">
      <div className="navbar__container flex-container">
        <div className="navbar__group--half navbar__group--header flex-container">
          <div className="navbar__item">
            <SupervisorAccountIcon className="navbar__item--icon" />
          </div>

          <div className="navbar__item">
            <Typography variant="h6">HR Management</Typography>
          </div>
        </div>

        <div className="navbar__group--half navbar__group--actions flex-container flex-container--row-reverse">
          <div className="navbar__item">
            <Button color="inherit">Log Out</Button>
          </div>

          <div className="navbar__item">
            <Button color="inherit">Employee</Button>
          </div>

          <div className="navbar__item">
            <Button color="inherit">Team</Button>
          </div>

          <div className="navbar__item">
            <Button color="inherit">Position</Button>
          </div>
        </div>
      </div>
    </AppBar>
  );
});

export default NavBar;
