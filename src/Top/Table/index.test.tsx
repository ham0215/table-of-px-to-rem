import Table from '.';
import { render } from 'test-utils';

describe('Table', () => {
  test('snapshot testing', () => {
    const { asFragment } = render(<Table />);
    expect(asFragment()).toMatchSnapshot();
  });
});
