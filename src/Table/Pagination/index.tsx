import { useNavigate, useSearchParams } from 'react-router-dom';
import { Pagination } from '@mui/material';

export default function StyledPagination({ page }: { page: number }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const fontSize = Number(searchParams.get('f')) || 16;
  const onChange = (event: React.ChangeEvent<unknown>, page: number) => navigate(`?p=${page}&f=${fontSize}`);
  return (
    <Pagination
      count={15}
      boundaryCount={15}
      page={page}
      hideNextButton
      hidePrevButton
      size="small"
      onChange={onChange}
    />
  );
}
