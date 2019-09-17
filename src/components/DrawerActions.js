import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// MUI Components
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// Action Creators
import { logOut } from '../store/modules/user/actionCreators';

const DrawerActions = memo(({ isOpen }) => {
  const dispatch = useDispatch();

  return (
    <Drawer open={isOpen}>
      <List>
        <ListItem button>
          <ListItemText primary="Position" />
        </ListItem>

        <ListItem button>
          <ListItemText primary="Team" />
        </ListItem>

        <ListItem button>
          <ListItemText primary="Employee" />
        </ListItem>

        <ListItem button onClick={() => dispatch(logOut())}>
          <ListItemText primary="Log Out" />
        </ListItem>
      </List>
    </Drawer>
  );
});

DrawerActions.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default DrawerActions;
