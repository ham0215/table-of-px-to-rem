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

  it('不正な値に変更した場合', async () => {
    const { findByRole, getByText } = render(<FontSizeEditor />);
    const textbox = await findByRole('textbox');
    expect(textbox).toHaveValue('16');

    userEvent.type(textbox, '33');
    await waitFor(() => {
      getByText('Please set an integer from 1 to 32 on the font-size.');
    });
  });
});
