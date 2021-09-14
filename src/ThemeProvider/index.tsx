import { ReactNode, useContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { PaletteModeContext } from '../PaletteModeProvider';
import darkTheme from './darkTheme';
import lightTheme from './lightTheme';

export default function P2RThemeProvider({ children }: { children: ReactNode }) {
  const paletteMode = useContext(PaletteModeContext);
  const theme = paletteMode === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
