import { PaletteMode } from '@mui/material';
import { red } from '@mui/material/colors';

const theme = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
