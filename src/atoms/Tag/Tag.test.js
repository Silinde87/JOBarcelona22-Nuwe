import Tag from './Tag';
import { renderComponent } from '../../shared/test/themeWrapper';
import { theme } from '../../themes/theme';

describe('Tag Component', () => {
  test('should render a Tag component with some text and defined style', () => {
    const { queryByTestId, getByText } = renderComponent(
      <Tag data-testid={'tag-test'}>This is a tag</Tag>
    );
    const renderCard = queryByTestId('tag-test');

    expect(getByText(/This is a tag/i)).toBeInTheDocument();
    expect(renderCard).toHaveStyle(`
        background-color: ${theme.success350};
        border-radius: 25px;
    `);
  });

  test('should accept custom style as prop', () => {
    const { queryByTestId, getByText } = renderComponent(
      <Tag style={{ margin: '24px' }}>This is a tag</Tag>
    );
    const renderCard = queryByTestId('tag');

    expect(getByText(/This is a tag/i)).toBeInTheDocument();
    expect(renderCard).toHaveStyle(`
        margin: 24px;
    `);
  });
});
