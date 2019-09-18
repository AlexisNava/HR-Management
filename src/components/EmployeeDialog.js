import React, { memo } from 'react';
import PropTypes from 'prop-types';

// MUI Components
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// MUI Styles
import { useTheme } from '@material-ui/core/styles';

const EmployeeDialog = memo(({ isOpen, closeDialog }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog open={isOpen} fullScreen={fullScreen}>
      <DialogTitle>Employee</DialogTitle>

      <DialogContent>
        <DialogContentText>Add new Employee</DialogContentText>

        <TextField
          className="input--full-width"
          margin="normal"
          variant="outlined"
          type="text"
          helperText="This field is required"
          label="Team"
        />

        <TextField
          className="input--full-width"
          margin="normal"
          variant="outlined"
          type="text"
          helperText="This field is required"
          label="Position"
        />

        <TextField
          className="input--full-width"
          margin="normal"
          variant="outlined"
          type="text"
          helperText="This field is required"
          label="Email"
        />

        <TextField
          className="input--full-width"
          margin="normal"
          variant="outlined"
          type="text"
          helperText="This field is required"
          label="Password"
        />

        <TextField
          className="input--full-width"
          margin="normal"
          variant="outlined"
          type="text"
          helperText="This field is required"
          label="Name"
        />

        <TextField
          className="input--full-width"
          margin="normal"
          variant="outlined"
          type="text"
          helperText="This field is required"
          label="Last Name"
        />

        <TextField
          className="input--full-width"
          margin="normal"
          variant="outlined"
          type="text"
          label="Mother's Last Name"
        />
      </DialogContent>

      <DialogActions>
        <Button color="primary" onClick={() => closeDialog()}>
          Cancel
        </Button>

        <Button color="primary" onClick={() => closeDialog()}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
});

EmployeeDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
};

export default EmployeeDialog;
