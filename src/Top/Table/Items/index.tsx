import { Alert, Grid, Snackbar, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import useCopy from './useCopy';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
  width: '10rem',
}));

const PrimaryItem = styled(Item)(({ theme }) => ({
  backgroundColor: theme.palette.success.light,
}));

export default function Table({ page, fontSize }: { page: number; fontSize: number }) {
  const { handleCopy, openSnackBar, closeSnackBar } = useCopy();
  const { t } = useTranslation();

  const list = [];
  const startPx = 1 + (page - 1) * 100;
  for (let px = startPx; px < startPx + 100; px++) {
    const rem = px / fontSize;
    list.push(
      <Grid item key={px} onClick={handleCopy}>
        {Number.isInteger(rem) ? (
          <PrimaryItem>
            <Typography variant="body2">
              {px}px = {rem}rem
            </Typography>
          </PrimaryItem>
        ) : (
          <Item>
            <Typography variant="body2">
              {px}px = {rem}rem
            </Typography>
          </Item>
        )}
      </Grid>
    );
  }

  return (
    <>
      <Grid container spacing={1}>
        {list}
      </Grid>
      <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={closeSnackBar}>
        <Alert onClose={closeSnackBar} severity="success" sx={{ width: '100%' }}>
          {t('copied')}
        </Alert>
      </Snackbar>
    </>
  );
}
