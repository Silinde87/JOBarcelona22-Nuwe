import { breakPoints } from './../../shared/breakPoints';
import styled from 'styled-components';

const GiftListContainer = styled.div``;
const GiftsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  @media (min-width: ${breakPoints.xs}px) and (max-width: ${breakPoints.sm}px) {
    flex-direction: column;
  }
`;

export { GiftListContainer, GiftsWrapper };
