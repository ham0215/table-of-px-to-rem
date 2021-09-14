import { useContext, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import defaultTheme from './theme';
import './i18n';
import Copyright from './Copyright';
import Table from './Table';
import Header from './Header';
import { PaletteModeContext } from './PaletteModeProvider';

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(window.navigator.language);
  }, [i18n]);

  const paletteMode = useContext(PaletteModeContext);
  const theme = useMemo(
    () =>
      createTheme(defaultTheme(paletteMode)),
    [paletteMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Header />
        <Table />
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
