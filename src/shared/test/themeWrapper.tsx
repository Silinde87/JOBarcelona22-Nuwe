import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../themes/theme';

const renderComponent = (ui: JSX.Element): RenderResult => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

export { renderComponent };
