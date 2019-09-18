import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

// MUI Components
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
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
import {
  requestPositions,
  requestTeams,
  requestAddEmployee,
} from '../store/modules/employeeUtils/actionCreators';

const EmployeeDialog = memo(({ isOpen, closeDialog }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const dispatch = useDispatch();

  const positions = useSelector(state => state.employeeUtils.get('positions'));
  const teams = useSelector(state => state.employeeUtils.get('teams'));

  const [team, setTeam] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mothersName, setMothersName] = useState('');
  const [teamError, setTeamError] = useState(false);
  const [positionError, setPositionError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [mothersNameError, setMothersNameError] = useState(false);

  useEffect(() => {
    dispatch(requestPositions());
    dispatch(requestTeams());
  }, [dispatch]);

  function validateFields() {
    if (!team) {
      setTeamError(true);
      return false;
    }

    if (!position) {
      setPositionError(true);
      return false;
    }

    if (!email) {
      setEmailError(true);
      return false;
    }

    if (!password) {
      setPasswordError(true);
      return false;
    }

    if (!name) {
      setNameError(true);
      return false;
    }

    if (!lastName) {
      setLastNameError(true);
      return false;
    }

    if (!mothersName) {
      setMothersNameError(true);
      return false;
    }

    return true;
  }

  function clearStates() {
    setTeam('');
    setPosition('');
    setEmail('');
    setPassword('');
    setName('');
    setLastName('');
    setMothersName('');
  }

  return (
    <Dialog open={isOpen} fullScreen={fullScreen}>
      <DialogTitle>Employee</DialogTitle>

      <DialogContent>
        <DialogContentText>Add new Employee</DialogContentText>

        <FormControl className="input--full-width" error={teamError}>
          <InputLabel htmlFor="age-helper">Team</InputLabel>

          <Select value={team} onChange={event => setTeam(event.target.value)}>
            {Array.isArray(teams) &&
              teams.map(team => (
                <MenuItem key={team.id} value={team.id}>
                  {team.name}
                </MenuItem>
              ))}
          </Select>

          <FormHelperText>This field is required</FormHelperText>
        </FormControl>

        <FormControl className="input--full-width" error={positionError}>
          <InputLabel htmlFor="age-helper">Position</InputLabel>

          <Select
            value={position}
            onChange={event => setPosition(event.target.value)}
          >
            {Array.isArray(positions) &&
              positions.map(position => (
                <MenuItem key={position.id} value={position.id}>
                  {position.name}
                </MenuItem>
              ))}
          </Select>

          <FormHelperText>This field is required</FormHelperText>
        </FormControl>

        <TextField
          className="input--full-width"
          margin="normal"
          variant="outlined"
          type="text"
          helperText="This field is required"
          label="Email"
          error={emailError}
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <TextField
          className="input--full-width"
          margin="normal"
          variant="outlined"
          type="password"
          helperText="This field is required"
          label="Password"
          error={passwordError}
          value={password}
          onChange={event => setPassword(event.target.value)}
        />

        <TextField
          className="input--full-width"
          margin="normal"
          variant="outlined"
          type="text"
          helperText="This field is required"
          label="Name"
          error={nameError}
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <TextField
          className="input--full-width"
          margin="normal"
          variant="outlined"
          type="text"
          helperText="This field is required"
          label="Last Name"
          error={lastNameError}
          value={lastName}
          onChange={event => setLastName(event.target.value)}
        />

        <TextField
          className="input--full-width"
          margin="normal"
          variant="outlined"
          type="text"
          helperText="This field is required"
          label="Mother's Last Name"
          error={mothersNameError}
          value={mothersName}
          onChange={event => setMothersName(event.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button
          color="primary"
          onClick={() => {
            clearStates();
            closeDialog();
          }}
        >
          Cancel
        </Button>

        <Button
          color="primary"
          onClick={() => {
            if (validateFields()) {
              dispatch(
                requestAddEmployee(
                  team,
                  position,
                  email,
                  password,
                  name,
                  lastName,
                  mothersName,
                ),
              );
            }

            clearStates();
            closeDialog();
          }}
        >
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
