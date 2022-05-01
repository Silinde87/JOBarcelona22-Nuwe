import { InnerContainer, StyledCard } from './Card.styled';

export type CardProps = {
  children: React.ReactNode;
  dataTestId?: string;
};

const Card: React.FC<CardProps> = ({ children, dataTestId = 'card-component', ...otherProps }) => {
  return (
    <StyledCard data-testid={dataTestId} {...otherProps}>
      <InnerContainer>{children}</InnerContainer>
    </StyledCard>
  );
};

export default Card;
