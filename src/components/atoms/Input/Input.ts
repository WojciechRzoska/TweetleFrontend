import { FormFieldProps } from 'components/molecues/FormField/FormField';
import styled from 'styled-components';

export const Input = styled.input<FormFieldProps>`
  border: none;
  height: 3rem;
  width: 100%;
  font-size: 1rem;

  border-radius: 5px;
  border: 3px solid #bfbfbf;
  border-color: ${({ isError }) => (isError ? 'red' : 'transparent')};
  box-shadow: 0px 2px 10px -3px rgba(66, 68, 90);

  @media (min-width: 60em) {
    font-size: 1.2rem;
  }
  @media (min-width: 83em) {
  }
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ isError }) => (isError ? 'red' : 'grey')};
  }
`;
