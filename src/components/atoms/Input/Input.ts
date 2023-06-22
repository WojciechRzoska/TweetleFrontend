import { FormFieldProps } from 'components/molecues/FormField/FormField';
import styled from 'styled-components';

export const Input = styled.input<FormFieldProps>`
  border: none;
  height: 3rem;
  width: 100%;
  font-size: 1.4rem;
  font-weight: bold;
  border-radius: 5px;
  border: 3px solid #bfbfbf;
  border-color: ${({ isError }) => (isError ? 'red' : 'transparent')};

  @media (min-width: 60em) {
    font-size: 1.6rem;
  }
  @media (min-width: 83em) {
    font-size: 1.8rem;
  }
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ isError }) => (isError ? 'red' : 'grey')};
  }
`;
