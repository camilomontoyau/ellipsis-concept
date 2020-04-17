import React, { useState, Fragment, useRef } from "react";
import _times from "lodash/times";
import ColumnResizer from "react-column-resizer";
import useResizeObserver from "use-resize-observer";
import _debounce from "lodash/debounce";
import Cell from "./Cell";
import "./list.css";

const List2 = () => {
  const [cells, setCells] = useState(500);
  const [debounce, setDebounce] = useState(100);
  const [truncatedTextWidth, setTruncatedTextWidth] = useState(100);
  const ref = useRef(null);
  useResizeObserver({
    ref,
    onResize: _debounce(({ width }) => {
      setTruncatedTextWidth(width * 1.475);
    }, debounce),
  });
  return (
    <Fragment>
      <h1>1 observer for all cells</h1>
      <label htmlFor="cells">number of cells</label>
      <input
        type="number"
        onChange={(e) => setCells(e.target.value)}
        value={cells}
        id="cells"
      />
      <label htmlFor="debounce">debounce delay (ms)</label>
      <input
        type="number"
        onChange={(e) => setDebounce(e.target.value)}
        value={debounce}
        id="debounce"
      />
      <table>
        <tbody>
          <tr>
            <td ref={ref}>
              {_times(cells, String).map((item) => (
                <Cell
                  key={`cell-${item}`}
                  cell={`cell-${item}`}
                  truncatedTextWidth={truncatedTextWidth}
                />
              ))}
            </td>
            <ColumnResizer className="columnResizer" minWidth={0} />
            <td style={{ width: "800px" }} />
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default List2;
