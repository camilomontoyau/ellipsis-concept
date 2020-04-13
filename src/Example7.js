import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dotdotdot from "react-dotdotdot";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles({
  root: {
    width: "230px",
  },
});

const Example7 = () => {
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
  iaculis metus. Etiam egestas sagittis tincidunt. Nunc dictum sapien
  vel mauris ultrices bibendum. Integer volutpat eros ut purus auctor,
  et eleifend tellus consectetur. Maecenas iaculis nisi sed turpis
  ornare hendrerit. In vitae mauris quis ligula sodales luctus. Nullam
  sodales sodales nunc, eu facilisis nunc sodales nec. Etiam luctus
  sollicitudin mattis. Sed tempus erat vel dapibus molestie. Nulla
  aliquet vel ligula ut consequat. Suspendisse euismod lectus eu enim
  rhoncus dapibus. Vivamus consectetur feugiat nunc at tempus. Quisque
  imperdiet in dui malesuada egestas. Cras elementum odio id risus
  viverra viverra. Quisque interdum.`;
  return (
    <div>
      <h1>example 7</h1>
      <p>Same as example 5 but this one is using MUI tooltip childrens need to be able to hold a ref <br/> 
      <a href='https://material-ui.com/api/tooltip/'>check this note</a></p>
      <div style={{ maxWidth: "400px" }}>
        <Tooltip title={text}>
        <Button variant="outlined">
          <Dotdotdot clamp={2}>{text}</Dotdotdot>
        </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default Example7;
