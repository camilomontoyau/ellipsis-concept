import React from "react";
import Paper from "@material-ui/core/Paper";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 230,
  },
});

const Example2 = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>example 2</h1>
      <Paper className={classes.root}>
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
            A very long text that overflows. A very long text that overflows
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <DraftsIcon fontSize="small" />
            </ListItemIcon>
            A very long text that overflows. A very long text that overflows
          </MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
};

export default Example2;
