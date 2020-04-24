import React, { useState, Fragment, useRef } from "react";
import _times from "lodash/times";
import useResizeObserver from "use-resize-observer";
import SplitPane from "react-split-pane";
import _debounce from "lodash/debounce";
import Cell from "./Cell";
import "./list.css";

const truncateWidth = (newPaneWidth) => {
  if (newPaneWidth <= 400) {
    return Math.floor(newPaneWidth * 1.565);
  }
  if (newPaneWidth <= 500) {
    return Math.floor(newPaneWidth * 1.65);
  }
  if (newPaneWidth <= 600) {
    return Math.floor(newPaneWidth * 1.75);
  }
  return Math.floor(newPaneWidth * 1.8);
};

const List2 = () => {
  const [cells, setCells] = useState(500);
  const [debounce, setDebounce] = useState(1);
  const [truncatedTextWidth, setTruncatedTextWidth] = useState(100);
  const [lines, setLines] = useState(1);
  const ref = useRef(null);
  useResizeObserver({
    ref,
    onResize: _debounce(({ width }) => {
      setTruncatedTextWidth(truncateWidth(width));
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
        id="lines"
      />
      <label htmlFor="debounce">truncation lines</label>
      <input
        type="number"
        onChange={(e) => setLines(e.target.value)}
        value={lines}
        id="lines"
      />
      <SplitPane 
        split="vertical" 
        minSize={360} 
        defaultSize={360}
      >
        <div ref={ref} className="list-wrapper">
        {_times(cells, String).map((item) => (
          <Cell
            key={`cell-${item}`}
            cell={`cell-${item}`}
            truncatedTextWidth={truncatedTextWidth}
          />
        ))}
        </div>
        <div/>
      </SplitPane>
      
    </Fragment>
  );
};

export default List2;
