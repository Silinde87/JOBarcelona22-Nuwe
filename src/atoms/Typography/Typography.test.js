import { renderComponent } from '../../shared/test/themeWrapper';
import Typography from './Typography';

describe('Typography Component', () => {
  test('should render a text component with default p type', () => {
    const { queryByTestId } = renderComponent(<Typography data-testid="text">text</Typography>);
    const textComponent = queryByTestId('text');

    expect(textComponent.innerHTML).toBe('text');
    expect(textComponent.nodeName).toBe('P');
  });
});
