import { useNavigate } from 'react-router-dom';
import { Pagination } from '@mui/material';

export default function StyledPagination({ page, fontSize }: { page: number; fontSize: string }) {
  const navigate = useNavigate();
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
