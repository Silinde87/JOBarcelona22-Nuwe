import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Typographys } from './Typography.styled';

/**
 * TypographyProps
 * @memberof Typography
 * @alias TypographyProps
 */
export type TypographyProps = {
  /** Typography type according to Types */
  type?: Types;
  /** Typography weight according to Weights */
  weight?: Weights | null;
  /** Typography size according to Sizes */
  size?: Sizes | null;
  /** Color of the text. */
  color?: string;
  /** The label of the component */
  children?: React.ReactNode;
  /** Custom style for the component */
  style?: object;
};

/**
 * TypographyStyleProps
 * @memberof Typography
 * @alias TypographyStyleProps
 */
export type TypographyStyleProps = {
  weight?: Weights;
  color?: string;
  size?: Sizes;
  style?: object;
};

/**
 * Enum for Typography Sizes
 * @enum {Sizes}
 */
export enum Sizes {
  XL = 'XL',
  L = 'L',
  M = 'M',
  S = 'S',
  XS = 'XS',
}

/**
 * Enum for Typography Weights
 * @enum {Weights}
 */
export enum Weights {
  LIGHT = 'LIGHT',
  REGULAR = 'REGULAR',
  SEMIBOLD = 'SEMIBOLD',
}

/**
 * Enum for Typography Types
 * @enum {Types}
 */
export enum Types {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  P = 'P',
  CAPTION = 'CAPTION',
}

/**
 * Component used to render a Typography
 *
 * @component
 * @example
 * <Typography type={Types.H1} color={Theme.gray200}>Lorem ipsum</Typography>
 */
const Typography: React.FC<TypographyProps> = (props) => {
  const themeContext = useContext(ThemeContext);
  const {
    children,
    type = Types.P,
    size = null,
    weight = null,
    color = themeContext.gray800,
    style,
    ...otherProps
  } = props;
  const Text = Typographys[type];
  return (
    <Text type={type} size={size} weight={weight} color={color} style={style} {...otherProps}>
      {children}
    </Text>
  );
};

export default Typography;
