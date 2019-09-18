import React, { memo, useState } from 'react';

// MUI Components
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';

// MUI Icons
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import PostAddIcon from '@material-ui/icons/PostAdd';

const TeamList = memo(() => {
  const [isListOpen, setIsListOpen] = useState(false);

  return (
    <Paper className="team-list">
      <List>
        <ListItem
          button
          onClick={event => {
            console.log('event', event.target);
            setIsListOpen(currentState => !currentState);
          }}
        >
          <ListItemIcon>
            <RecentActorsIcon className="team-list__item-icon" />
          </ListItemIcon>

          <ListItemText primary="Back End" secondary="1 Member" />
          {isListOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>

        <Collapse in={isListOpen} timeout="auto" unmountOnExit>
          <List>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar className="avatar">
                  <AccountCircleIcon />
                </Avatar>
              </ListItemAvatar>

              <ListItemText
                primary="Jared Letto"
                secondary="Back End Developer"
              />

              <ListItemSecondaryAction>
                <IconButton>
                  <PostAddIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>

            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar className="avatar">
                  <AccountCircleIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Jared Letto"
                secondary="Back End Developer"
              />
              <ListItemSecondaryAction>
                <IconButton>
                  <PostAddIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Paper>
  );
});

export default TeamList;
