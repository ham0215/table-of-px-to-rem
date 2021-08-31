import { Grid } from '@material-ui/core';
import Item from './Item'

export default function Table() {
  let list = [];

  for (let i = 1; i <= 1_000; i++) {
    list.push(
      <Grid item>
        <Item>{i}px = {i / 16}rem</Item>
      </Grid>
    );
  }

  return (
    <Grid container spacing={1}>
      {list}
    </Grid>
  );
}
