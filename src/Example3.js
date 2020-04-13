import React from "react";
import Paper from "@material-ui/core/Paper";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import LinesEllipsis from "react-lines-ellipsis";
import LinesEllipsisTooltip from "react-lines-ellipsis-with-tooltip";

const useStyles = makeStyles({
  root: {
    width: "230px",
  },
});

const Example3 = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>example 3</h1>
      <p></p>
      <Paper className={classes.root}>
        <MenuList>
          <MenuItem>
            <div style={{maxWidth:'200px'}}>
                <LinesEllipsis
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac iaculis metus. Etiam egestas sagittis tincidunt. Nunc dictum sapien vel mauris ultrices bibendum. Integer volutpat eros ut purus auctor, et eleifend tellus consectetur. Maecenas iaculis nisi sed turpis ornare hendrerit. In vitae mauris quis ligula sodales luctus. Nullam sodales sodales nunc, eu facilisis nunc sodales nec. Etiam luctus sollicitudin mattis. Sed tempus erat vel dapibus molestie. Nulla aliquet vel ligula ut consequat. Suspendisse euismod lectus eu enim rhoncus dapibus. Vivamus consectetur feugiat nunc at tempus. Quisque imperdiet in dui malesuada egestas. Cras elementum odio id risus viverra viverra. Quisque interdum."
                maxLine={2}
                basedOn="letters"
                />
            </div>
          </MenuItem>
          <MenuItem>2</MenuItem>
          <MenuItem>3</MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
};

export default Example3;
