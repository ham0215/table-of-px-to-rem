import { Container } from '@material-ui/core';
import Copyright from './Copyright';
import Table from './Table';

export default function App() {
  return (
    <Container maxWidth="xl">
      <Table />
      <Copyright />
    </Container>
  );
}
