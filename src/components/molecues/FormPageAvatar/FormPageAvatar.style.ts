import { StyledSingupButton } from 'components/organisms/SignInForm/SignInForm.style';
import { ButtonsWrapper } from 'components/organisms/SignupForm/SignupForm.style';
import styled from 'styled-components';

export const CropButton = styled(StyledSingupButton)`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.mainGreen};
  @media (min-width: 60em) {
    width: 30%;
  }
`;

export const FormPageAvatarButtons = styled(ButtonsWrapper)`
  margin-top: 10px;
`;

export const CroppedImageWrapper = styled.div`
  padding: 1rem;
  width: 100%;
  align-self: center;
  @media (min-width: 60em) {
    width: 80%;
  }
`;
export const CroppedImage = styled.img`
  height: 100%;
  align-self: center;
`;
