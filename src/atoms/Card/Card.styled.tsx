import styled from 'styled-components';
import { breakPoints } from '../../shared/breakPoints';
import { CardProps } from './Card';

const StyledCard = styled.div<CardProps>`
  border-radius: 8px;
  ${({ theme }) => `
    border: 1.5px solid ${theme.gray500};
    background-color: ${theme.gray200};  
  `}
  padding: 24px;
  min-width: 276px;
  user-select: none;
  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    ${({ theme }) => `
      border-color: ${theme.secondary800};
      background-color: ${theme.secondary300};  
  `}
  }

  @media (min-width: ${breakPoints.xs}px) and (max-width: ${breakPoints.sm}px) {
    padding: 32px 8px;
    min-width: 277px;
    margin-left: 40px;
    margin-right: 40px;
  }
`;

const InnerContainer = styled.div`
  width: 100%;
`;

export { StyledCard, InnerContainer };
