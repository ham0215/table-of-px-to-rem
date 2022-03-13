import { TextField, Box, Alert } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import Items from './Items';
import useTable, { PAGINATION_MAX_COUNT } from './useTable';
import Pagination from './Pagination';

export default function Table() {
  const { fontSize, handleChangeFontSize, error } = useTable();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('p')) || 1;

  return (
    <>
      <Box sx={{ margin: '0.5rem' }}>{error && <Alert severity="error">{error}</Alert>}</Box>
      <Box sx={{ margin: '0.5rem' }}>
        <TextField label="font-size(px)" variant="outlined" onChange={handleChangeFontSize} value={fontSize} />
      </Box>

      <Box sx={{ margin: '0.5rem' }}>
        <Pagination page={page} paginationMaxCount={PAGINATION_MAX_COUNT} />
      </Box>
      <Box>
        <Items page={page} fontSize={fontSize} />
      </Box>
      <Box sx={{ margin: '0.5rem' }}>
        <Pagination page={page} paginationMaxCount={PAGINATION_MAX_COUNT} />
      </Box>
    </>
  );
}
