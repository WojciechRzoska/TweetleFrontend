import { styled } from 'styled-components';

export const TemplateWrapper = styled.div`
  display: flex;
  @media (min-width: 57em) {
    width: 100ch;
    margin: auto;
  }
`;
export const Wrapper = styled.div`
  padding: 1rem;
  z-index: 2;
  @media (min-width: 39em) {
    margin-left: 6rem;
  }
  //test 68em
  @media (min-width: 57em) {
    margin-left: 10rem;
  }
`;
