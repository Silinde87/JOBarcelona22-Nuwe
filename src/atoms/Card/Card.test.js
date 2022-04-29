import Card from './Card';
import { renderComponent } from '../../shared/test/themeWrapper';
import { defaultTheme } from '../../themes/defaultTheme';

describe('Card Component', () => {
  test('should render a primary Card component with some text', () => {
    const { queryByTestId, getByText } = renderComponent(<Card>some random text</Card>);
    const renderCard = queryByTestId('some-card-component');

    expect(getByText(/some random text/i)).toBeInTheDocument();
    expect(renderCard).toHaveStyle(`border-color: ${defaultTheme.card.border}`);
  });
});
