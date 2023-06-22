import FormField from 'components/molecues/FormField/FormField';
import Cropper from 'react-easy-crop';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;
export const WrapperForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: 100%;

  @media (min-width: 60em) {
    gap: 2rem;
  }
`;

export const DateFields = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  @media (min-width: 60em) {
    gap: 2rem;
  }
`;
export const ButtonsWrapper = styled.div`
  position: relative;
  width: 80%;
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const AvatarInput = styled(FormField)`
  display: none;
`;
export const AvatarUpload = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.mainGreen};
  color: white;
  width: 50%;
  padding: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 5px;
  text-align: center;
`;

export const AvatarWrapper = styled.div`
  height: 450px;
  display: flex;
  position: relative;
  height: 450px;
  width: 100%;
  margin-top: 1rem;
`;
export const ResizeWrapper = styled.div``;
export const ResizeImage = styled.div`
  overflow: hidden;

  & > * {
    height: 85%;
  }
`;

export const SliderWrapper = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  width: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
`;

export const Slider = styled.input`
  /* Set the slider track color */
  --track-color: #ddd;

  /* Set the slider thumb color */
  --thumb-color: #333;

  /* Remove the default styles */
  appearance: none;
  background: transparent;
  border: none;
  width: 100%;

  /* Track styles */
  &::-webkit-slider-runnable-track {
    height: 8px;
    background-color: var(--track-color);
    border-radius: 4px;
  }

  /* Thumb styles */
  &::-webkit-slider-thumb {
    appearance: none;
    height: 16px;
    width: 16px;
    background-color: ${({ theme }) => theme.colors.mainGreen};
    border-radius: 50%;
    border: none;
    margin-top: -4px;
  }
`;
export const WrapperFormImage = styled(WrapperForm)`
  gap: 0;
  width: 100%;
  height: 100%;

  @media (min-width: 60em) {
    gap: 0;
  }
`;
