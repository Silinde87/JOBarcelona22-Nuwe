import { Typographys } from './Typography.styled';
import { theme } from '../../themes/theme';

export type TypographyProps = {
  type?: Types;
  size?: Sizes;
  weight?: Weights;
  color?: string;
  children: React.ReactNode;
  style?: object;
};

export type TypographyStyleProps = {
  weight?: Weights;
  color?: string;
  size?: Sizes;
  style?: object;
};

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
}
export enum Sizes {
  XL = 'XL',
  L = 'L',
  M = 'M',
  S = 'S',
}

const Typography: React.FC<TypographyProps> = ({
  children,
  type = Types.H1,
  size = null,
  weight = null,
  color = theme.gray800,
  style,
  ...otherProps
}) => {
  const Text = Typographys[type];
  return (
    <Text size={size} weight={weight} color={color} style={style} {...otherProps}>
      {children}
    </Text>
  );
};

export default Typography;
