import React from "react";
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

const Example1 = () => (
  <Paper className={classes.root}>
    <h1>example 1</h1>
    <MenuList>
      <MenuItem>
        <ListItemIcon>
          <SendIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="inherit">A short message</Typography>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <PriorityHighIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="inherit">
          A very long text that overflows
        </Typography>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <DraftsIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="inherit" noWrap>
          A very long text that overflows
        </Typography>
      </MenuItem>
    </MenuList>
  </Paper>
);

export default Example1;
