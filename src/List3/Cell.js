import React, { useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Truncate from "react-truncate";
import makeStyles from '@material-ui/styles/makeStyles';
import './cell.css';

const useStyles = makeStyles(theme => ({
  container: {
    marginLeft: 0,
    height: '56px',
    textTransform: 'none'
  },
  containerLabel: {
    justifyContent: 'left',
  }
}));


const Cell = ({truncatedTextWidth = 0, cell, lines = 1}) => {
  const text = `${cell} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
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

  const classes = useStyles();

  return (
    <div style={{width:'100%'}}>
      <Tooltip arrow title={text} placement="right">
        <Button 
        classes={{
            root: classes.container,
            label: classes.containerLabel,
          }}
        >
          <Truncate className="cell-text" lines={lines} width={truncatedTextWidth}>
            {text}
          </Truncate>
        </Button>
      </Tooltip>
    </div>
  );
};

export default Cell;
