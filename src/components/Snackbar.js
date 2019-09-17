import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// MUI Components
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';

// Action Creators
import { hideNotification } from '../store/modules/notification/actionCreators';

const snackbar = memo(({ isOpen, message }) => {
  const dispatch = useDispatch();

  return (
    <Snackbar
      autoHideDuration={6000}
      message={<span>{message}</span>}
      open={isOpen}
      onClose={() => dispatch(hideNotification())}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      action={[
        <Button
          color="secondary"
          size="small"
          onClick={() => dispatch(hideNotification())}
        >
          OK
        </Button>,
      ]}
    />
  );
});

snackbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  message: PropTypes.string,
};

export default snackbar;
