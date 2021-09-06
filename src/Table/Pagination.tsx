import { Pagination } from '@material-ui/core';

export default function StyledPagination({
  page,
  paginationMaxCount,
  handleChangeIndex,
}: {
  page: number;
  paginationMaxCount: number;
  handleChangeIndex: (event: React.ChangeEvent<unknown>, page: number) => void;
}) {
  return (
    <Pagination
      count={paginationMaxCount}
      color="primary"
      boundaryCount={paginationMaxCount}
      page={page}
      hideNextButton
      hidePrevButton
      size="small"
      onChange={handleChangeIndex}
    />
  );
}
