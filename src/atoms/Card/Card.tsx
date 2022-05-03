import { InnerContainer, StyledCard } from './Card.styled';

/**
 * CardProps
 * @memberof Card
 * @alias CardProps
 */
export type CardProps = {
  /** Assigns data-testid of the component */
  dataTestId?: string;
  /** Card content */
  children: React.ReactNode;
};

/**
 * Component used to render a Card
 *
 * @component
 */
const Card: React.FC<CardProps> = ({ children, dataTestId = 'card-component', ...otherProps }) => {
  return (
    <StyledCard data-testid={dataTestId} {...otherProps}>
      <InnerContainer>{children}</InnerContainer>
    </StyledCard>
  );
};

export default Card;
