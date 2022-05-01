import styled from 'styled-components';
import { CardProps } from './Card';

const StyledCard = styled.div<CardProps>`
  border-radius: 8px;
  ${({ theme }) => `
    border: 1.5px solid ${theme.gray500};
    background-color: ${theme.gray200};  
  `}
  padding: 24px;
`;

const InnerContainer = styled.div`
  width: 100%;
`;

export { StyledCard, InnerContainer };
