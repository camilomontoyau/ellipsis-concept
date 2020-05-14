import React, { useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Truncate from "react-truncate";
import useResizeObserver from "use-resize-observer/polyfilled";
import _debounce from "lodash/debounce";

const Cell = () => {
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

  const [truncatedTextWidth, setTruncatedTextWidth] = useState(0);
  const ref = useRef(null);
  useResizeObserver({
    ref,
    onResize: _debounce(({ width }) => {
      setTruncatedTextWidth(width * 1.475);
    }, 250),
  });

  return (
    <div ref={ref}>
      <Tooltip arrow title={text} placement="right">
        <Button>
          <Truncate lines={1} width={truncatedTextWidth}>
            {text}
          </Truncate>
        </Button>
      </Tooltip>
    </div>
  );
};

export default Cell;
