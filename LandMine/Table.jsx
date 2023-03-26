import React, { useContext } from 'react';
import { TableContext } from './LandMine';
import Tr from './Tr';

const Table = () => {
  const { tableData } = useContext(TableContext);

  return (
    <table>
      {Array(tableData.length)
        .fill()
        .map((_, i) => (
          <Tr rowIndex={i} />
        ))}
    </table>
  );
};

export default Table;
