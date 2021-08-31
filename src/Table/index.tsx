import { Pagination } from '@material-ui/core';
import Items from './Items';
import useTable from './useTable';

export default function Table() {
  const { index, handleChangeIndex, fontSize, handleChangeFontSize, error } = useTable();
  return (
    <>
      {error && <div>{error}</div>}
      <Pagination count={11} color="primary" boundaryCount={11} hideNextButton hidePrevButton size='small' onChange={handleChangeIndex} />
      <Items index={index} fontSize={fontSize} />
      <Pagination count={11} color="primary" boundaryCount={11} hideNextButton hidePrevButton size='small' onChange={handleChangeIndex} />
    </>
  );
}
