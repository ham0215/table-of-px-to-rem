import { Container } from '@material-ui/core';
import Copyright from './Copyright';
import Table from './Table';
import Header from './Header';

export default function App() {
  return (
    <Container maxWidth="xl">
      <Header />
      <Table />
      <Copyright />
    </Container>
  );
}
