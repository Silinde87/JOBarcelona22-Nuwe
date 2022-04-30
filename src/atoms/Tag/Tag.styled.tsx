import styled from 'styled-components';

const TagWrapper = styled.div`
  background-color: ${({ theme }) => theme.success350};
  width: fit-content;
  border-radius: 25px;
  padding: 8px 16px;
  user-select: none;
`;

export { TagWrapper };
