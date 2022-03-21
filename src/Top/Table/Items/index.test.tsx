import Items from '.';
import { render, waitFor } from 'test-utils';

describe('Items', () => {
  it('fontSizeが未指定の場合', async () => {
    const { getByText } = render(<Items page={1} fontSize="" />);
    await waitFor(() => {
      getByText('16px = 1rem');
    });
  });

  it('fontSizeが32の場合', async () => {
    const { getByText } = render(<Items page={1} fontSize="32" />);
    await waitFor(() => {
      getByText('32px = 1rem');
    });
  });
});
