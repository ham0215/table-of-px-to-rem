import Container from '@material-ui/core/Container';
import Copyright from './Copyright';
import Table from './Table';

export default function App() {
  return (
    <Container maxWidth="sm">
      <Table />
      <Copyright />
    </Container>
  );
}
