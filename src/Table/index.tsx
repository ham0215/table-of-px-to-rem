import { TextField, Box, Alert } from '@material-ui/core';
import Items from './Items';
import useTable, { PAGINATION_MAX_COUNT } from './useTable';
import Pagination from './Pagination';

export default function Table() {
  const {
    index,
    handleChangeIndex,
    fontSize,
    handleChangeFontSize,
    error
  } = useTable();
  return (
    <>
      <Box sx={{ margin: '0.5rem' }}>
        {error && <Alert severity="error">{error}</Alert>}
      </Box>
      <Box sx={{ margin: '0.5rem' }}>
        <TextField label="font-size(px)" variant="outlined" onChange={handleChangeFontSize} defaultValue={fontSize} />
      </Box>

      <Box sx={{ margin: '0.5rem' }} >
        <Pagination page={index} paginationMaxCount={PAGINATION_MAX_COUNT} handleChangeIndex={handleChangeIndex} />
      </Box>
      <Box>
        <Items index={index} fontSize={fontSize} />
      </Box>
      <Box sx={{ margin: '0.5rem' }} >
        <Pagination page={index} paginationMaxCount={PAGINATION_MAX_COUNT} handleChangeIndex={handleChangeIndex} />
      </Box>
    </>
  );
}
