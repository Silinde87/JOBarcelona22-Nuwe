import { Types, Weights, Sizes } from './Typography';

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
