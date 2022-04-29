import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../themes/theme';

const renderComponent = (ui: React.ReactNode): RenderResult => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

export { renderComponent };
