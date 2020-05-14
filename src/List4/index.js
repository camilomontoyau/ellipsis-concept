import React, { Component, Fragment, createRef } from "react";
import _times from "lodash/times";
import SplitPane from "react-split-pane";
import _debounce from "lodash/debounce";
import Cell from "./Cell";
import "./list.css";

const truncateWidth = (newPaneWidth, widthCorrection = true, correction = null) => {
  if(!widthCorrection) {
    return newPaneWidth;
  }
  if(correction && correction > 0) {
    return Math.floor(newPaneWidth * correction);
  }
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
  const [cells, setCells] = useState(100);
  const [debounce, setDebounce] = useState(100);
  const [truncatedTextWidth, setTruncatedTextWidth] = useState(100);
  const [realWidth, setRealWidth] = useState(100);
  const [lines, setLines] = useState(1);
  const [widthCorrection, setWidthCorrection] = useState(true);
  const [correction, setCorrection] = useState(0);
  const [styles, setStyles] = useState(true);
  const ref = useRef(null);
  useResizeObserver({
    ref,
    onResize: _debounce(({ width }) => {
      setRealWidth(width);
      setTruncatedTextWidth(truncateWidth(width, widthCorrection, correction));
    }, debounce),
  });
  return (
    <Fragment>
      <h1>1 observer for all cells</h1>
      <label htmlFor="cells">total cells</label>
      <input
        type="number"
        onChange={(e) => setCells(e.target.value)}
        value={cells}
        id="cells"
      />
      <label htmlFor="debounce">debounce(ms)</label>
      <input
        type="number"
        onChange={(e) => setDebounce(e.target.value)}
        value={debounce}
        id="lines"
      />
      <label htmlFor="lines">truncation lines</label>
      <input
        type="number"
        onChange={(e) => setLines(e.target.value)}
        value={lines}
        id="lines"
      />
      <label htmlFor="realwidth">real width</label>
      <input
        type="number"
        value={realWidth}
        id="realwidth"
        readOnly
      />
      <label htmlFor="truncatedtextwidth">truncated Width</label>
      <input
        type="number"
        value={truncatedTextWidth}
        id="truncatedtextwidth"
        readOnly
      />
      <label htmlFor="truncatedtextwidth">use correction?</label>
      <input
        type="checkbox"
        value={widthCorrection}
        id="truncatedtextwidth"
        defaultChecked={widthCorrection}
        onChange={()=>{
          setWidthCorrection(!widthCorrection);
          setTruncatedTextWidth(truncateWidth(realWidth, widthCorrection, correction));
        }}
      />
      <label htmlFor="correction">set correction</label>
      <input
        type="number"
        onChange={(e) => setCorrection(e.target.value)}
        value={correction}
        id="correction"
      />
      <label htmlFor="styles">styles</label>
      <input
        type="checkbox"
        value={styles}
        id="truncatedtextwidth"
        defaultChecked={styles}
        onChange={()=>{
          setStyles(!styles)
        }}
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
            lines={lines}
            styles={styles}
          />
        ))}
        </div>
        <div/>
      </SplitPane>
      
    </Fragment>
  );
};

export default List2;
