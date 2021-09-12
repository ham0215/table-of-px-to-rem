import { useTranslation } from 'react-i18next';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import theme from './theme';
import './i18n';
import Copyright from './Copyright';
import Table from './Table';
import Header from './Header';
import DarkmodeProvider from './DarkmodePrivider';

export default function App() {
  const { i18n } = useTranslation();
  i18n.changeLanguage(window.navigator.language);

  return (
    <DarkmodeProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="xl">
          <Header />
          <Table />
          <Copyright />
        </Container>
      </ThemeProvider>
    </DarkmodeProvider>
  );
}
