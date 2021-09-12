import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();

  return (
    <>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs="auto">
          <Typography variant="h5" component="h1" gutterBottom>
            {t('title')}
          </Typography>
        </Grid>
        <Grid item xs>
          hoge
        </Grid>
      </Grid>
      <Typography gutterBottom>{t('description')}</Typography>
    </>
  );
}
