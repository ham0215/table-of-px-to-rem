import { Container } from '@mui/material';
import Copyright from './Copyright';
import Table from './Table';
import Header from './Header';

export default function Top() {
  return (
    <Container maxWidth="xl">
      <Header />
      <Table />
      <Copyright />
    </Container>
  );
}
