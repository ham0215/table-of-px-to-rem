import { useContext, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, IconButton, Typography, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { SetPaletteModeContext } from 'PaletteModeProvider';

export default function Header() {
  const { t } = useTranslation();
  const setPaletteMode = useContext(SetPaletteModeContext);
  const theme = useTheme();

  const toggleColorMode = useCallback(() => {
    if (!setPaletteMode) return;

    const nextMode = theme.palette.mode === 'dark' ? 'light' : 'dark';
    setPaletteMode(nextMode);
  }, [setPaletteMode, theme.palette.mode]);

  return (
    <>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs="auto">
          <Typography variant="h5" component="h1" gutterBottom>
            {t('title')}
          </Typography>
        </Grid>
        <Grid item xs>
          <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Grid>
      </Grid>
      <Typography gutterBottom>{t('description')}</Typography>
    </>
  );
}
