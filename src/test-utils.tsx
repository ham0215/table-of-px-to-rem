import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import ThemeProvider from './providers/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';

const AllTheProviders: FC = ({ children }) => {
  return (
    <ThemeProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
