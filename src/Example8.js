import React from "react";
import ColumnResizer from "react-column-resizer";
import Dotdotdot from "react-dotdotdot";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import "./example8.scss";

const Example8 = () => {
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
      <h1>example 8</h1>
      <p>
        Same as example 7 but figuring out how to the multiline ellipsis reacts
        to parent node resizing <br />
      </p>
      <div style={{ maxWidth: "700px" }}>
        <table>
          <tbody>
            <tr>
              <td>
                <span>react dotdotdot example</span>
                <Tooltip arrow title={text}>
                  <Button variant="outlined">
                    <Dotdotdot clamp={2}>{text}</Dotdotdot>
                  </Button>
                </Tooltip>
              </td>
              <ColumnResizer className="columnResizer" minWidth={0} />
              <td>{text}</td>
            </tr>
            <tr>
              <td>{text}</td>
              <td />
              <td>
                <span>react dotdotdot example</span>
                <Tooltip arrow title={text}>
                  <Button variant="outlined">
                    <Dotdotdot clamp={2}>{text}</Dotdotdot>
                  </Button>
                </Tooltip>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Example8;
