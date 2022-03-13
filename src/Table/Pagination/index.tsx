import { useNavigate } from 'react-router-dom';
import { Pagination } from '@mui/material';

export default function StyledPagination({ page, paginationMaxCount }: { page: number; paginationMaxCount: number }) {
  const navigate = useNavigate();
  const onChange = (event: React.ChangeEvent<unknown>, page: number) => navigate(`?p=${page}`);
  return (
    <Pagination
      count={paginationMaxCount}
      boundaryCount={paginationMaxCount}
      page={page}
      hideNextButton
      hidePrevButton
      size="small"
      onChange={onChange}
    />
  );
}
