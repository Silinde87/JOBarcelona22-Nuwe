import styled from 'styled-components';

const TagWrapper = styled.div`
  background-color: ${({ theme }) => theme.success400};
  width: fit-content;
  border-radius: 25px;
  padding: 8px 16px;
  user-select: none;
  white-space: nowrap;
`;

export { TagWrapper };
