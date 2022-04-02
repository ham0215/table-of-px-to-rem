import Items from '.';
import { render, waitFor } from 'test-utils';
import userEvent from '@testing-library/user-event';

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

describe('Clipboard', () => {

  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: {
        text: '',
        readText() {
          return this.text;
        },
        writeText(data: string) {
          this.text = data;
          return Promise.resolve();
        },
      },
    });
  });

  afterAll(() => {
    Object.assign(navigator, { clipboard: undefined });
  });

  it('Click to copy to clipboard', async () => {
    const { getByText } = render(<Items page={1} fontSize="" />);
    await waitFor(() => {
      getByText('16px = 1rem');
    });

    userEvent.click(getByText('16px = 1rem'));
    await waitFor(() => {
      expect(navigator.clipboard.readText()).toEqual('1rem');
    });
  });
});
