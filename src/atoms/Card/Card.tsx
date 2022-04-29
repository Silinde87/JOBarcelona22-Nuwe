import { InnerContainer, StyledCard } from './Card.styled';
import { Theme } from '../../shared/Interfaces/theme';

export type CardProps = {
  children: React.ReactNode;
  dataTestId?: string;
  theme?: Theme;
};

const Card: React.FC<CardProps> = ({
  children,
  dataTestId = 'card-component',
  theme,
  ...otherProps
}) => {
  return (
    <StyledCard theme={theme} {...otherProps} data-testid={dataTestId}>
      <InnerContainer>{children}</InnerContainer>
    </StyledCard>
  );
};

export default Card;
