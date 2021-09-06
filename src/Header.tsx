import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h5" component="h1" gutterBottom>
        {t('title')}
      </Typography>
      <Typography gutterBottom>{t('description')}</Typography>
    </>
  );
}
