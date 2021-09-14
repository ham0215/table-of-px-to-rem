import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, IconButton, Typography } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material';
import { TogglePaletteModeContext } from 'PaletteModeProvider';

export default function Header() {
  const { t } = useTranslation();
  const theme = useTheme();
  const togglePaletteMode = useContext(TogglePaletteModeContext);

  return (
    <>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs="auto">
          <Typography variant="h5" component="h1">
            {t('title')}
          </Typography>
        </Grid>
        <Grid item xs>
          <IconButton sx={{ ml: 1 }} color="inherit" onClick={togglePaletteMode} >
            {theme.palette.mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Grid>
      </Grid>
      <Typography gutterBottom>{t('description')}</Typography>
    </>
  );
}
