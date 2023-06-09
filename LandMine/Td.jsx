import React, { useContext } from 'react';
import { TableContext, CODE } from './LandMine';

const getTdStyle = (code) => {
  switch (code) {
    case CODE.NORMAL:
    case CODE.MINE:
      return {
        background: '#444',
      };
    case CODE.OPENED:
      return {
        background: 'white',
      };
    default:
      return {
        background: 'white',
      };
  }
};

const getTdText = (code) => {
  switch (code) {
    case CODE.NORMAL:
      return '';
    case CODE.MINE:
      return '💥';
    default:
      return '';
  }
};

const Td = ({ rowIndex, cellIndex }) => {
  const { tableData } = useContext(TableContext);
  return <td style={getTdStyle(tableData[rowIndex][cellIndex])}>{getTdText(tableData[rowIndex][cellIndex])}</td>;
};

export default Td;
