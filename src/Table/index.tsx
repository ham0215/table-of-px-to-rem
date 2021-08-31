import { Pagination } from '@material-ui/core';
import Items from './Items';
import useTable from './useTable';

export default function Table() {
  const { index, setIndex, fontSize, setFontSize } = useTable();
  return (
    <>
      <Pagination count={11} color="primary" boundaryCount={11} hideNextButton hidePrevButton size='small' />
      <Items index={index} fontSize={fontSize} />
      <Pagination count={11} color="primary" boundaryCount={11} hideNextButton hidePrevButton size='small' />
    </>
  );
}
