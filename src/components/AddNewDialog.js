import React, { memo, useState } from 'react';
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

const AddNewDialog = memo(({ isOpen, title, closeDialog, request }) => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog open={isOpen} fullScreen={fullScreen}>
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>
        <DialogContentText>
          {`Add ${title} for your new Employees.`}
        </DialogContentText>

        <TextField
          className="input--full-width"
          margin="normal"
          variant="outlined"
          type="text"
          helperText="This field is required"
          error={nameError}
          label={title}
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button
          onClick={() => {
            // Clear the input
            setName('');

            // Deactivate the error
            setNameError(false);

            // Close Dialog
            closeDialog();
          }}
          color="primary"
        >
          Cancel
        </Button>

        <Button
          onClick={async () => {
            if (name) {
              // Make Request
              await request(name);

              // Clear the input
              setName('');

              // Deactivate the error
              setNameError(false);

              // Close the dialog
              closeDialog();
            } else {
              // Activate the error
              setNameError(true);
            }
          }}
          color="primary"
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
});

AddNewDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  closeDialog: PropTypes.func.isRequired,
  request: PropTypes.func.isRequired,
};

export default AddNewDialog;
