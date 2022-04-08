import { VFC, ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import ThemeProvider from './providers/ThemeProvider';
import { MemoryRouter } from 'react-router-dom';
import i18n from 'i18n';

export type Props = {
  children: ReactNode;
};

const AllTheProviders: VFC<Props> = ({ children }) => {
  return (
    <ThemeProvider>
      <MemoryRouter>{children}</MemoryRouter>
    </ThemeProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
export { i18n };
