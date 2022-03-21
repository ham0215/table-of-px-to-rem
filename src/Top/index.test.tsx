import Top from '.';
import { render } from 'test-utils';

describe('Top', () => {
  test('snapshot testing', () => {
    const { asFragment } = render(<Top />);
    expect(asFragment()).toMatchSnapshot();
  });
});
