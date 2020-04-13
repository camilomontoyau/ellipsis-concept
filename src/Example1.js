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

const Example1 = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>example 1</h1>
      <p>The example1 needs to have this in consideration 
        <br/>
        <a href="https://material-ui.com/components/menus/#limitations">Warning at Material UI</a>
        <br/>
        <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=327437">Flexbox Ellipsis bug</a>
      </p>
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
    </div>
  );
};

export default Example1;
