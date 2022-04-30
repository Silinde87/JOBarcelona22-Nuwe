import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Typographys } from './Typography.styled';

export type TypographyProps = {
  type?: Types;
  weight?: Weights | null;
  size?: Sizes | null;
  color?: string;
  children?: React.ReactNode;
  style?: object;
};

export type TypographyStyleProps = {
  weight?: Weights;
  color?: string;
  size?: Sizes;
  style?: object;
};

export enum Sizes {
  XL = 'XL',
  L = 'L',
  M = 'M',
  S = 'S',
  XS = 'XS',
}

export enum Weights {
  LIGHT = 'LIGHT',
  REGULAR = 'REGULAR',
  SEMIBOLD = 'SEMIBOLD',
}

export enum Types {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  P = 'P',
  CAPTION = 'CAPTION',
}

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
