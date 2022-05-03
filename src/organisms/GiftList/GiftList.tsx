import Gift, { GiftProps } from './../../molecules/Gift';
import Typography, { Types } from './../../atoms/Typography';
import { GiftListContainer, GiftsWrapper } from './GiftList.styled';

export type GiftListProps = {
  /** Assigns data-testid of the component */
  dataTestId?: string;
  /** Title label of GiftList component */
  title: string;
  /** List of gifts */
  gifts?: GiftProps[];
};

const GiftList: React.FC<GiftListProps> = ({
  dataTestId = 'giftList-component',
  title,
  gifts = [],
}) => {
  return (
    <GiftListContainer data-testid={dataTestId}>
      <Typography type={Types.H2}>{title}</Typography>
      <GiftsWrapper>
        {gifts.map((gift, index) => (
          <Gift key={index} {...gift} />
        ))}
      </GiftsWrapper>
    </GiftListContainer>
  );
};

export default GiftList;
