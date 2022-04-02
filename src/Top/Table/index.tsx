import { Box } from '@mui/material';
import useParams from './useParams';
import Items from './Items';
import Pagination from './Pagination';
import FontSizeEditor from './FontSizeEditor';

export default function Table() {
  const { page, fontSize } = useParams();

  return (
    <>
      <FontSizeEditor />
      <Box sx={{ margin: '0.5rem' }}>
        <Pagination page={page} fontSize={fontSize} />
      </Box>
      <Box>
        <Items page={page} fontSize={fontSize} />
      </Box>
      <Box sx={{ margin: '0.5rem' }}>
        <Pagination page={page} fontSize={fontSize} />
      </Box>
    </>
  );
}
