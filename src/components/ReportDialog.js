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

const ReportDialog = memo(({ isOpen, closeDialog }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog open={isOpen} fullScreen={fullScreen}>
      <DialogTitle>Report</DialogTitle>

      <DialogContent>
        <DialogContentText>Add new Report.</DialogContentText>

        <TextField
          className="input--full-width"
          margin="normal"
          variant="outlined"
          type="text"
          helperText="This field is required"
        />
      </DialogContent>

      <DialogActions>
        <Button color="primary">Cancel</Button>

        <Button color="primary">Add</Button>
      </DialogActions>
    </Dialog>
  );
});

ReportDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
};

export default ReportDialog;
