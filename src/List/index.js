import React, { useState, Fragment } from "react";
import _times from "lodash/times";
import ColumnResizer from "react-column-resizer";
import Cell from "./Cell";
import "./list.css";

const List = () => {
  const [cells, setCells] = useState(100);
  return (
    <Fragment>
      <input
        type="number"
        onChange={(e) => setCells(e.target.value)}
        value={cells}
      />
      <div className="resize10 both"></div>
      <table>
        <tbody>
          <tr>
            <td>empty</td>
            <ColumnResizer className="columnResizer" minWidth={0} />
            <td></td>
          </tr>
          {_times(cells, () => (
            <tr>
              <td>empty</td>
              <td />
              <td>
                <Cell />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default List;
