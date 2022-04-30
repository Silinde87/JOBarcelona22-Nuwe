import { renderComponent } from '../../shared/test/themeWrapper';
import { theme } from '../../themes/theme';
import Typography, { Sizes, Types, Weights } from './Typography';

describe('Typography Component', () => {
  test('should render a text component with default p type and default style', () => {
    const { queryByTestId } = renderComponent(<Typography data-testid="text">text</Typography>);
    const textComponent = queryByTestId('text');

    expect(textComponent.innerHTML).toBe('text');
    expect(textComponent.nodeName).toBe('P');
    expect(textComponent).toHaveStyle(`
      font-size: 18px;
      line-height: 20px;
      font-weight: 400;
      color: ${theme.gray800};
    `);
  });

  test('should render a text component with default CAPTION type and CAPTION style', () => {
    const { queryByTestId } = renderComponent(
      <Typography data-testid="text" type={Types.CAPTION}>
        text
      </Typography>
    );
    const textComponent = queryByTestId('text');

    expect(textComponent.nodeName).toBe('P');
    expect(textComponent).toHaveStyle(`
      font-size: 14px;
      line-height: 16px;
      font-weight: 300;
      color: ${theme.gray800};
    `);
  });

  test('should render a text component with default H1 type and H1 style', () => {
    const { queryByTestId } = renderComponent(
      <Typography data-testid="text" type={Types.H1}>
        text
      </Typography>
    );
    const textComponent = queryByTestId('text');

    expect(textComponent.nodeName).toBe('H1');
    expect(textComponent).toHaveStyle(`
      font-size: 40px;
      line-height: 42px;
      font-weight: 600;
      color: ${theme.gray800};
    `);
  });

  test('should render a text component with default H2 type and H2 style', () => {
    const { queryByTestId } = renderComponent(
      <Typography data-testid="text" type={Types.H2}>
        text
      </Typography>
    );
    const textComponent = queryByTestId('text');

    expect(textComponent.nodeName).toBe('H2');
    expect(textComponent).toHaveStyle(`
      font-size: 32px;
      line-height: 36px;
      font-weight: 600;
      color: ${theme.gray800};
    `);
  });

  test('should render a text component with default H3 type and H3 style', () => {
    const { queryByTestId } = renderComponent(
      <Typography data-testid="text" type={Types.H3}>
        text
      </Typography>
    );
    const textComponent = queryByTestId('text');

    expect(textComponent.nodeName).toBe('H3');
    expect(textComponent).toHaveStyle(`
      font-size: 24px;
      line-height: 28px;
      font-weight: 600;
      color: ${theme.gray800};
    `);
  });

  test('should render a text component with custom style', () => {
    const { queryByTestId } = renderComponent(
      <Typography
        data-testid="text"
        color={theme.gray1000}
        size={Sizes.L}
        weight={Weights.SEMIBOLD}
      >
        text
      </Typography>
    );
    const textComponent = queryByTestId('text');

    expect(textComponent.nodeName).toBe('P');
    expect(textComponent).toHaveStyle(`
      font-size: 32px;
      line-height: 36px;
      font-weight: 600;
      color: ${theme.gray1000};
    `);
  });
});
