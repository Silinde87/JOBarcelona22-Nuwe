import { InnerContainer, StyledCard } from './Card.styled';

export type CardProps = {
  /** Assigns data-testid of the component */
  dataTestId?: string;
  /** Card content */
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ children, dataTestId = 'card-component', ...otherProps }) => {
  return (
    <StyledCard data-testid={dataTestId} {...otherProps}>
      <InnerContainer>{children}</InnerContainer>
    </StyledCard>
  );
};

export default Card;
