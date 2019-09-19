import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// MUI Components
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';

// MUI Styles
import { useTheme } from '@material-ui/core/styles';

// Action Creators
import { requestAddReport } from '../store/modules/employeeUtils/actionCreators';

const hours = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
];

const ReportDialog = memo(({ isOpen, closeDialog, employeeID }) => {
  const dispatch = useDispatch();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [arrival, setArrival] = useState(0);
  const [departure, setDeparture] = useState(0);
  const [arrivalError, setArrivalError] = useState(false);
  const [departureError, setDepartureError] = useState(false);

  function validateFields() {
    if (!arrival) {
      setArrivalError(true);

      return false;
    }

    if (!departure) {
      setDepartureError(true);

      return false;
    }

    return true;
  }

  return (
    <Dialog open={isOpen} fullScreen={fullScreen}>
      <DialogTitle>Report</DialogTitle>

      <DialogContent>
        <DialogContentText>Add new Report.</DialogContentText>

        <FormControl className="input--full-width" error={arrivalError}>
          <InputLabel htmlFor="age-helper">Arrival Time</InputLabel>

          <Select
            value={arrival}
            onChange={event => setArrival(event.target.value)}
          >
            {hours.map(hour => (
              <MenuItem key={hour} value={hour}>
                {hour}
              </MenuItem>
            ))}
          </Select>

          <FormHelperText>This field is required</FormHelperText>
        </FormControl>

        <FormControl className="input--full-width" error={departureError}>
          <InputLabel htmlFor="age-helper">Departure Time</InputLabel>

          <Select
            value={departure}
            onChange={event => setDeparture(event.target.value)}
          >
            {hours.map(hour => (
              <MenuItem key={hour} value={hour}>
                {hour}
              </MenuItem>
            ))}
          </Select>

          <FormHelperText>This field is required</FormHelperText>
        </FormControl>
      </DialogContent>

      <DialogActions>
        <Button color="primary" onClick={() => closeDialog()}>
          Cancel
        </Button>

        <Button
          color="primary"
          onClick={() => {
            if (validateFields()) {
              dispatch(requestAddReport(arrival, departure, employeeID));

              closeDialog();
            }
          }}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
});

ReportDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  employeeID: PropTypes.string.isRequired,
};

export default ReportDialog;
