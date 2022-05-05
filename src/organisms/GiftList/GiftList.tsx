import Gift from './../../molecules/Gift';
import Typography, { Types } from './../../atoms/Typography';
import { GiftListContainer, GiftsWrapper } from './GiftList.styled';
import { GiftListProps } from './GiftList.types';

/**
 * Component used to render a GiftList
 *
 * @component
 * @example
 * const tags = GiftProps[];
 * <Gift title={'title'} gifts={gifts} />
 */
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
