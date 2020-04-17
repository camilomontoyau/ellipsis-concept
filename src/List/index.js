import React, { useState, Fragment } from "react";
import _times from "lodash/times";
import ColumnResizer from "react-column-resizer";
import Cell from "./Cell";
import "./list.css";

const List = () => {
  const [cells, setCells] = useState(100);
  return (
    <Fragment>
      <h1>1 observer per each cell</h1>
      <input
        type="number"
        onChange={(e) => setCells(e.target.value)}
        value={cells}
      />
      <table>
        <tbody>
          {_times(cells, () => (
            <tr>
              <td>
                <Cell />
              </td>
              <ColumnResizer className="columnResizer" minWidth={0} />
              <td />
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default List;
