import { useCallback, useState } from 'react';
import { Alert, Grid, Snackbar } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: '10rem',
}));

const PrimaryItem = styled(Item)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
}));

export default function Table({ index, fontSize }: { index: number, fontSize: number }) {
  let list = [];
  const startPx = 1 + (index - 1) * 100;

  const [openSnackBar, setOpenSnackBar] = useState(false);

  const copy = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const text = event.currentTarget.firstElementChild?.textContent;
      if (!text) return;

      navigator.clipboard.writeText(text.split(' ')[2]).then(e => {
        setOpenSnackBar(true);
      });
    },
    [setOpenSnackBar],
  );

  const handleClose = useCallback(
    () => {
      setOpenSnackBar(false);
    },
    [setOpenSnackBar],
  )

  for (let px = startPx; px < startPx + 100; px++) {
    const rem = px / fontSize;
    list.push(
      <Grid item key={px} onClick={copy}>
        {Number.isInteger(rem) ? <PrimaryItem>{px}px = {rem}rem</PrimaryItem> : <Item>{px}px = {rem}rem</Item>}
      </Grid>
    );
  }

  return (
    <>
      <Grid container spacing={1}>
        {list}
      </Grid>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Copied rem to the clipboard!!
        </Alert>
      </Snackbar>
    </>
  );
}
