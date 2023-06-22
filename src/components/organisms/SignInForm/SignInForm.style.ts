import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.form`
  padding: 2.5rem;
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
  & > span {
    margin-top: -15px;
    color: red;
  }
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
`;
