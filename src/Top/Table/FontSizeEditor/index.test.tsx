import FontSizeEditor from '.';
import { render, waitFor } from 'test-utils';
import userEvent from '@testing-library/user-event';

describe('FontSizeEditor', () => {
  it('初期表示', async () => {
    const { findByRole } = render(<FontSizeEditor />);
    const textbox = await findByRole('textbox');
    expect(textbox).toHaveValue('16');
  });

  it('別の数字に変更した場合', async () => {
    const { findByRole, getByDisplayValue } = render(<FontSizeEditor />);
    const textbox = await findByRole('textbox');
    expect(textbox).toHaveValue('16');

    userEvent.clear(textbox);
    userEvent.type(textbox, '24');
    await waitFor(() => {
      getByDisplayValue('24');
    });
  });
});
