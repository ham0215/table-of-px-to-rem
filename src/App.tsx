import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import './i18n';
import Top from './Top';
import ThemeProvider from './providers/ThemeProvider';

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(window.navigator.language);
  }, [i18n]);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Top />
      </BrowserRouter>
    </ThemeProvider>
  );
}
