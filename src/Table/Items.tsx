import { Grid } from '@material-ui/core';
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

  for (let px = startPx; px < startPx + 100; px++) {
    const rem = px / fontSize;
    list.push(
      <Grid item>
        {Number.isInteger(rem) ? <PrimaryItem>{px}px = {rem}rem</PrimaryItem> : <Item>{px}px = {rem}rem</Item>}
      </Grid>
    );
  }

  return (
    <Grid container spacing={1}>
      {list}
    </Grid>
  );
}
