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

const AddNewDialog = memo(({ isOpen, title, closeDialog }) => {
  const [name, setName] = useState('');

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog open={isOpen} fullScreen={fullScreen}>
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>
        <DialogContentText>
          {`Add ${title} for your new users.`}
        </DialogContentText>

        <TextField
          className="input--full-width"
          margin="normal"
          variant="outlined"
          label={title}
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={() => closeDialog()} color="primary">
          Cancel
        </Button>

        <Button onClick={() => closeDialog()} color="primary">
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
};

export default AddNewDialog;
