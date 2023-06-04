import styled from 'styled-components';

export const Wrapper = styled.form`
  padding: 3rem;
  width: 85%;
  max-width: 500px;
  min-height: 300px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 20px;
  box-shadow: 7px 9px 15px -10px rgba(66, 68, 90, 1);

  @media (min-width: 60em) {
    width: 95%;
  }
`;
