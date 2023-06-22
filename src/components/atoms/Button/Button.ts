import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.mainGreen};
  color: white;
  width: 100%;
  height: 3rem;
  font-size: 1.7rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;
