import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dotdotdot from "react-dotdotdot";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    width: "230px",
  },
});

const Example6 = () => {
  return (
    <div>
      <h1>example 6</h1>
      <p>The examples below are wrapped by a button and use dotdotdot</p>
      <div style={{ maxWidth: "400px" }}>
        <h2>using html button</h2>  
        <button>
          <Dotdotdot clamp={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            iaculis metus. Etiam egestas sagittis tincidunt. Nunc dictum sapien
            vel mauris ultrices bibendum. Integer volutpat eros ut purus auctor,
            et eleifend tellus consectetur. Maecenas iaculis nisi sed turpis
            ornare hendrerit. In vitae mauris quis ligula sodales luctus. Nullam
            sodales sodales nunc, eu facilisis nunc sodales nec. Etiam luctus
            sollicitudin mattis. Sed tempus erat vel dapibus molestie. Nulla
            aliquet vel ligula ut consequat. Suspendisse euismod lectus eu enim
            rhoncus dapibus. Vivamus consectetur feugiat nunc at tempus. Quisque
            imperdiet in dui malesuada egestas. Cras elementum odio id risus
            viverra viverra. Quisque interdum.
          </Dotdotdot>
        </button>
      </div>
      <div style={{ maxWidth: "400px" }}>
        <h2>using MUI button</h2>
        <Button variant="outlined">
          <Dotdotdot clamp={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            iaculis metus. Etiam egestas sagittis tincidunt. Nunc dictum sapien
            vel mauris ultrices bibendum. Integer volutpat eros ut purus auctor,
            et eleifend tellus consectetur. Maecenas iaculis nisi sed turpis
            ornare hendrerit. In vitae mauris quis ligula sodales luctus. Nullam
            sodales sodales nunc, eu facilisis nunc sodales nec. Etiam luctus
            sollicitudin mattis. Sed tempus erat vel dapibus molestie. Nulla
            aliquet vel ligula ut consequat. Suspendisse euismod lectus eu enim
            rhoncus dapibus. Vivamus consectetur feugiat nunc at tempus. Quisque
            imperdiet in dui malesuada egestas. Cras elementum odio id risus
            viverra viverra. Quisque interdum.
          </Dotdotdot>
        </Button>
      </div>
    </div>
  );
};

export default Example6;
