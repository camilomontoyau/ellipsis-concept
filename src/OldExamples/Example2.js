import React from "react";
import Paper from "@material-ui/core/Paper";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Dotdotdot from "react-dotdotdot";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "230px",
  },
});

const Example2 = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>example 2</h1>
      <p>
        the example below is using{" "}
        <a href="https://www.npmjs.com/package/react-dotdotdot">
          react-dotdotdot
        </a>
      </p>
      <Paper className={classes.root}>
        <MenuList>
          <MenuItem>
            <Dotdotdot clamp={"230px"}>
              This text is using react-dotdotdot clamp = 2 This text is using
              react-dotdotdot clamp = 2 This text is using react-dotdotdot clamp
              = 2
            </Dotdotdot>
          </MenuItem>
          <MenuItem>
            <Dotdotdot clamp={3}>
              This text is using react-dotdotdot clamp = 3 This text is using
              react-dotdotdot clamp = 3 This text is using react-dotdotdot clamp
              = 3 This text is using react-dotdotdot clamp = 3 This text is
              using react-dotdotdot clamp = 3 This text is using react-dotdotdot
              clamp = 3
            </Dotdotdot>
          </MenuItem>
          <MenuItem>
            <Dotdotdot clamp={4}>
              This text is using react-dotdotdot clamp = 4 This text is using
              react-dotdotdot clamp = 4 This text is using react-dotdotdot clamp
              = 4 This text is using react-dotdotdot clamp = 4 This text is
              using react-dotdotdot clamp = 4 This text is using react-dotdotdot
              clamp = 4
            </Dotdotdot>
          </MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
};

export default Example2;
