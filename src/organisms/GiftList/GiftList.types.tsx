import { GiftProps } from './../../molecules/Gift/Gift.types';
/**
 * GiftListProps
 * @memberof GiftList
 * @alias GiftListProps
 */
export type GiftListProps = {
  /** Assigns data-testid of the component */
  dataTestId?: string;
  /** Title label of GiftList component */
  title: string;
  /** List of gifts */
  gifts?: GiftProps[];
};
