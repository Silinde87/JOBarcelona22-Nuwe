import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<CardProps>`
  border-radius: 8px;
  ${({ theme }) => `
    border: 1.5px solid ${theme.gray500};
    background-color: ${theme.gray200};  
  `}
  padding: 24px;
`;

const InnerContainer = styled.div``;

export { StyledCard, InnerContainer };
