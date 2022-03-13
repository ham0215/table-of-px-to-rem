import Table from '.';
import { render } from '@testing-library/react';

describe('Table', () => {
  test('snapshot testing', () => {
    const { asFragment } = render(<Table />);
    expect(asFragment()).toMatchSnapshot();
  });
});
