import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { Container } from '@mui/material';
import './i18n';
import Copyright from './Copyright';
import Table from './Table';
import Header from './Header';
import ThemeProvider from './providers/ThemeProvider';

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(window.navigator.language);
  }, [i18n]);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Container maxWidth="xl">
          <Header />
          <Table />
          <Copyright />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}
