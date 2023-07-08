import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Wrapper = styled.form`
  width: 100%;
  padding: 1rem;
  max-width: 500px;
  min-width: 300px;
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
  & > span {
    margin-top: -15px;
    color: red;
  }
`;

export const CreateAccountButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: 1.3rem;
  font-weight: bold;
`;
export const StyledSingupButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  color: white;
  width: 50%;
  padding: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 5px;
  text-align: center;
  justify-items: center;

  ${(props) =>
    props.disabled &&
    css`
      background-color: ${({ theme }) =>
        theme.colors.lightGrey}; /* Change to your desired color */
      color: white;
    `}
`;
