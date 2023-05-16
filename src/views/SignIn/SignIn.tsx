import React from 'react';
import SignInForm from 'components/organisms/SignInForm/SignInForm';
import { CompanyLogo } from 'components/atoms/CompanyLogo/CompanyLogo';
import {} from 'components/organisms/SignInForm/SignInForm.style';
import {
  SignInContainer,
  SignInContainerVertical,
  SubTitle,
  TitleSection,
  Wrapper,
  WomanWithLaptopIMG,
  WomanWithSpeakerIMG,
} from './SignIn.style';

const SignIn = () => {
  return (
    <Wrapper>
      <WomanWithSpeakerIMG src="src/assets/photos/WomanWithSpeaker.png" />
      <SignInContainer>
        <TitleSection>
          <CompanyLogo isBig>Tweetle</CompanyLogo>
          <SubTitle>
            Be ready to talk. Share your experiences with other people and
            allways stay up to date
          </SubTitle>
        </TitleSection>
        <SignInContainerVertical>
          <SignInForm />
          <WomanWithLaptopIMG src="src/assets/photos/WomanWithLaptop.png" />
        </SignInContainerVertical>
      </SignInContainer>
    </Wrapper>
  );
};

export default SignIn;
