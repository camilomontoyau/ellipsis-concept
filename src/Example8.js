import React, { useRef, useState } from "react";
import ColumnResizer from "react-column-resizer";
import Dotdotdot from "react-dotdotdot";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Truncate from "react-truncate";
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

  const parentRef = useRef(null);
  const tableRef = useRef(null);
  const resizerRef = useRef(null);
  const tdRef1 = useRef(null);
  const tdRef2 = useRef(null);
  const [truncatedTextWidth, setTruncatedTextWidth] = useState(0);

  console.log({parentRef, tableRef, resizerRef, tdRef1, tdRef2});
  if(parentRef && parentRef.current) {
    parentRef.current.onResize = (parentEvent) => {
      console.log({parentEvent})
    }
  }
  if(tableRef && tableRef.current) {
    tableRef.current.onResize = (tableEvent) => {
      console.log({tableEvent})
    }
  }
  if(resizerRef && resizerRef.current) {
    resizerRef.current.onResize = (resizerEvent) => {
      console.log({resizerEvent})
    }
  }
  if(tdRef1 && tdRef1.current) {
    tdRef1.current.onResize = (tdEvent1) => {
      console.log({tdEvent1})
    }
  }
  if(tdRef2 && tdRef2.current) {
    tdRef2.current.onResize = (tdEvent2) => {
      console.log({tdEvent2})
    }
  }

  return (
    <div>
      <h1>example 8</h1>
      <p>
        Same as example 7 but figuring out how to the multiline ellipsis reacts
        to parent node resizing <br />
      </p>
      <div style={{ maxWidth: "700px" }}>
        <table ref={tableRef}>
          <tbody>
            <tr>
              <td ref={tdRef1}>
                <span>react dotdotdot example</span>
                <Tooltip arrow title={text}>
                  <Button variant="outlined">
                    <Dotdotdot clamp={2}>{text}</Dotdotdot>
                  </Button>
                </Tooltip>
              </td>
              <ColumnResizer ref={resizerRef} className="columnResizer" minWidth={0} />
              <td ref={tdRef2}>{text}</td>
            </tr>
            <tr>
              <td>{text}</td>
              <td />
              <td ref={parentRef}>
                <span>react dotdotdot example</span>
                <Tooltip arrow title={text}>
                  <Button variant="outlined">
                    <Truncate lines={1} width={truncatedTextWidth}>{text}</Truncate>
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
