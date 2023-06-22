import styled from 'styled-components';

export const Textarea = styled.textarea`
  border: none;
  height: 3rem;
  width: 100%;
  font-size: 1.4rem;
  font-weight: bold;
  border-radius: 5px;
  border: 1px solid #bfbfbf;
  height: 200px;
  resize: none;
  @media (min-width: 60em) {
    font-size: 1.6rem;
  }
  @media (min-width: 83em) {
    font-size: 1.8rem;
  }
`;
