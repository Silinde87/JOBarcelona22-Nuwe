import { TagProps } from './../../atoms/Tag/Tag.types';
/**
 * GiftProps
 * @memberof Gift
 * @alias GiftProps
 */
export type GiftProps = {
  /** Assigns data-testid of the component */
  dataTestId?: string;
  /** Title label of gift component */
  title: string;
  /** Description label of gift component */
  description: string;
  /** List of tags */
  tags?: TagProps[];
  /** Triggers the onClick function */
  onClick?: () => void;
};
