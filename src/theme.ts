import { PaletteMode } from '@mui/material';

const theme = (mode: PaletteMode) => ({
  palette: {
    mode,
  },
});

export default theme;
