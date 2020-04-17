import React, { useRef, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Truncate from "react-truncate";
import './example9.css';

const Example9 = () => {
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

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [truncatedTextWidth, setTruncatedTextWidth] = useState(0);


  

  console.log({ ref1, ref2, ref3 });

  useEffect(() => {
    const onResizeHandler = (event) => {
      console.log({ event });
    };

    if (ref1 && ref1.current) {
      ref1.current.addEventListener('resize', onResizeHandler);
    }

    if (ref2 && ref2.current) {
      ref2.current.addEventListener('resize', onResizeHandler);
    }
    if (ref3 && ref3.current) {
      ref3.current.addEventListener('resize', onResizeHandler);
    }
    return () => {
      if (ref1 && ref1.current) {
        ref1.current.removeEventListener('resize', onResizeHandler);
      }
  
      if (ref2 && ref2.current) {
        ref2.current.removeEventListener('resize', onResizeHandler);
      }
      if (ref3 && ref3.current) {
        ref3.current.removeEventListener('resize', onResizeHandler);
      }
    }
  }, []);

  return (
    <div className="wrap">
      <h1>example 9</h1>
      <p>
        Different approach to check the parent resizing <br />
      </p>
      <div ref={ref1} className="resize horizontal">
        <Tooltip arrow title={text}>
          <Button variant="outlined">
            <Truncate lines={1} width={truncatedTextWidth}>
              {text}
            </Truncate>
          </Button>
        </Tooltip>
      </div>
      <div ref={ref2} className="resize vertical">
        <Tooltip arrow title={text}>
          <Button variant="outlined">
            <Truncate lines={1} width={truncatedTextWidth}>
              {text}
            </Truncate>
          </Button>
        </Tooltip>
      </div>
      <div ref={ref3} className="resize both">
        <Tooltip arrow title={text}>
          <Button variant="outlined">
            <Truncate lines={1} width={truncatedTextWidth}>
              {text}
            </Truncate>
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default Example9;
