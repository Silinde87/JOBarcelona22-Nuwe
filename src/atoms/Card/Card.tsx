import { InnerContainer, StyledCard } from './Card.styled';
import { CardProps } from './Card.types';

/**
 * Component used to render a Card
 *
 * @component
 * @example
 * <Card dataTestId={'card'}>Lorem ipsum</Card>
 */
const Card: React.FC<CardProps> = ({ children, dataTestId = 'card-component', ...otherProps }) => {
  return (
    <StyledCard data-testid={dataTestId} {...otherProps}>
      <InnerContainer>{children}</InnerContainer>
    </StyledCard>
  );
};

export default Card;
