import { InnerContainer, StyledCard } from './Card.styled';

export type CardProps = {
  children: React.ReactNode;
  dataTestId?: string;
};

const Card: React.FC<CardProps> = ({ children, dataTestId = 'card-component', ...otherProps }) => {
  return (
    <StyledCard {...otherProps} data-testid={dataTestId}>
      <InnerContainer>{children}</InnerContainer>
    </StyledCard>
  );
};

export default Card;
