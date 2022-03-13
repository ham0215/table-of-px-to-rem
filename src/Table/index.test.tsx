import Table from '.';
import { render } from 'test-utilsq';

describe('Table', () => {
  test('snapshot testing', () => {
    const { asFragment } = render(<Table />);
    expect(asFragment()).toMatchSnapshot();
  });
});
