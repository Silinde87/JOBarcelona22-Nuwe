import styled from 'styled-components';
import { breakPoints } from '../../shared/breakPoints';

const StyledCard = styled.div`
  border-radius: 8px;
  ${({ theme }) => `
    border: 1.5px solid ${theme.gray500};
    background-color: ${theme.gray200};  
  `}
  padding: 32px 32px;
  min-width: 276px;
  font-family: Surt;
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
