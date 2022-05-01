import styled from 'styled-components';
import Typography from '../Typography';

const TagWrapper = styled.div`
  background-color: ${({ theme }) => theme.success400};
  width: fit-content;
  max-width: 160px;
  border-radius: 25px;
  padding: 8px 16px;
  user-select: none;
`;

const TagText = styled(Typography)`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: 0;
`;

export { TagWrapper, TagText };
