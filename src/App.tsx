import { useContext, useMemo } from 'react';
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
import { ModeContext } from './ColorModePrivider';

export default function App() {
  const { i18n } = useTranslation();
  i18n.changeLanguage(window.navigator.language);
  const mode = useContext(ModeContext);
  const theme = useMemo(
    () =>
      createTheme(defaultTheme(mode)),
    [mode],
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
