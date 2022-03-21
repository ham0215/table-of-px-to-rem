import { Box } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import Items from './Items';
import Pagination from './Pagination';
import FontSizeEditor from './FontSizeEditor';
import { validateFontSize } from './FontSizeEditor/useFontSizeEditor';

export default function Table() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('p')) || 1;
  const inputFontSize = Number(searchParams.get('f'));
  const fontSize = validateFontSize(inputFontSize) ? inputFontSize : 16;

  return (
    <>
      <FontSizeEditor />
      <Box sx={{ margin: '0.5rem' }}>
        <Pagination page={page} />
      </Box>
      <Box>
        <Items page={page} fontSize={fontSize} />
      </Box>
      <Box sx={{ margin: '0.5rem' }}>
        <Pagination page={page} />
      </Box>
    </>
  );
}
