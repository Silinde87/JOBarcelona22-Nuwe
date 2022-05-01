import Card from './../../atoms/Card';
import Typography from './../../atoms/Typography';

import styled from 'styled-components';

const GiftContainer = styled(Card)`
  cursor: pointer;
  user-select: none;
  transition: all 0.2s;
  width: 320px;
  height: 120px;

  &:hover,
  &:focus,
  &:active {
    ${({ theme }) => `
      border-color: ${theme.secondary800};
      background-color: ${theme.secondary300};  
  `}
  }
`;
const Title = styled(Typography)`
  margin: 0;
`;
const Description = styled(Typography)``;
const TagsWrapper = styled.div`
  display: flex;
  column-gap: 24px;
`;

export { GiftContainer, Title, Description, TagsWrapper };
