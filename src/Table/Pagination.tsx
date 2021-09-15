import { Pagination } from '@mui/material';

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
      boundaryCount={paginationMaxCount}
      page={page}
      hideNextButton
      hidePrevButton
      size="small"
      onChange={handleChangeIndex}
    />
  );
}
