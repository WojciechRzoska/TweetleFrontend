import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 90vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 60em) {
    flex-direction: row;
    gap: 4rem;
  }
`;

export const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 60em) {
    gap: 1rem;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
  }
  @media (min-width: 83em) {
    gap: 6.5rem;
  }
`;
export const TitleSection = styled.div`
  width: 80%;

  @media (min-width: 60em) {
    h1 {
      text-align: left;
    }
    width: 400px;
  }
`;
export const SubTitle = styled.h2`
  color: #a0a0a0;
  font-size: 1.7rem;
  padding-left: 0.5rem;
  margin-top: -10px;
  display: none;
  @media (min-width: 60em) {
    display: block;
  }
`;
export const SignInContainerVertical = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`;
export const WomanWithSpeakerIMG = styled.img`
  height: 550px;
  display: none;
  @media (min-width: 60em) {
    display: block;
  }
`;
export const WomanWithLaptopIMG = styled.img`
  width: 200px;
  @media (min-width: 60em) {
    width: 400px;
  }
`;
