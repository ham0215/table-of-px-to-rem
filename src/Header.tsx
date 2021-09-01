import { Typography } from '@material-ui/core';
import { MAX_FONT_SIZE } from './Table/useTable';

export default function Header() {
  return (
    <>
      <Typography variant="h5" component="h1" gutterBottom>Conversion table from px to rem.</Typography>
      <Typography gutterBottom>Enter font-size (px) to convert px from 1 to 1500 to rem. You can specify 1 to {MAX_FONT_SIZE} for font-size (px).</Typography>
    </>
  );
}
