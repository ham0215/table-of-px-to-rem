import { TextField, Box, Alert } from '@mui/material';
import useFontSizeEditor from './useFontSizeEditor';

export default function FontSizeEditor() {
  const { fontSize, handleChangeFontSize, error } = useFontSizeEditor();

  return (
    <>
      <Box sx={{ margin: '0.5rem' }}>{error && <Alert severity="error">{error}</Alert>}</Box>
      <Box sx={{ margin: '0.5rem' }}>
        <TextField label="font-size(px)" variant="outlined" onChange={handleChangeFontSize} value={fontSize} />
      </Box>
    </>
  );
}
