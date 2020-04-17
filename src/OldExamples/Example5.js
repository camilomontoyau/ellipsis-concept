import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dotdotdot from "react-dotdotdot";

const useStyles = makeStyles({
  root: {
    width: "230px",
  },
});

const Example5 = () => {
  return (
    <div>
      <h1>example 5</h1>
      <p>Using dotdotdot outside html ul li </p>
      <div style={{ maxWidth: "400px" }}>
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
      </div>
    </div>
  );
};

export default Example5;
