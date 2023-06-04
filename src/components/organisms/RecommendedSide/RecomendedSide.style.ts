import { styled } from 'styled-components';

export const Wrapper = styled.div`
  position: sticky;
  background-color: ${({ theme }) => theme.colors.white};
  border-left: 1px solid ${({ theme }) => theme.colors.mainGreen};
  display: none;

  @media (min-width: 57em) {
    display: block;
    width: 14rem;
    height: 100vh;
    top: 0;
    border-top: none;
  }
`;
