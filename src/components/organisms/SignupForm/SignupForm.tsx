import ModalHeader from 'components/molecues/ModalHeader/ModalHeader';
import React, { useCallback, useState } from 'react';
import FormField from 'components/molecues/FormField/FormField';
import { AuthProvider } from 'hooks/useAuth';
import { useForm } from 'react-hook-form';
import getCroppedImg from 'helpers/cropImage';
import { RegisterUser } from 'types/UserInterface';
import { faL } from '@fortawesome/free-solid-svg-icons';
import Cropper, { Area, Point } from 'react-easy-crop';
import {
  AvatarInput,
  AvatarUpload,
  AvatarWrapper,
  ButtonsWrapper,
  DateFields,
  ResizeImage,
  ResizeWrapper,
  Slider,
  SliderWrapper,
  Wrapper,
  WrapperForm,
  WrapperFormImage,
} from './SignupForm.style';
import { StyledSingupButton } from '../SignInForm/SignInForm.style';

const SignupForm = () => {
  const [step, setStep] = useState(1);

  const { authApi } = AuthProvider();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterUser>();

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };
  const currentYear = new Date().getFullYear();
  const yearRange = Array.from(
    { length: 101 },
    (_, index) => currentYear - index
  );
  const monthRange = Array.from({ length: 12 }, (_, index) => 1 + index);
  const dayRange = Array.from({ length: 31 }, (_, index) => 1 + index);

  const hiddenFileInput = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [isSelectedImage, setIsSelectedImage] = useState(false);
  const handleImageUpload = () => {
    const file = hiddenFileInput.current?.files?.[0] as File;
    setIsSelectedImage(true);
    setCroppedImage(null);
    setSelectedImage(URL.createObjectURL(file));
  };

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });

  const onCropComplete = useCallback(
    (croppedArea: Area, croppAreaPixels: Area) => {
      setCroppedAreaPixels(croppAreaPixels);
    },
    []
  );

  const showCroppedImage = useCallback(async () => {
    try {
      const croppingImage: string | null = await getCroppedImg(
        selectedImage,
        croppedAreaPixels
      );
      console.log('donee', { croppingImage });
      setCroppedImage(croppingImage);
      setIsSelectedImage(false);
    } catch (e) {
      console.error(e);
    }
  }, [selectedImage, croppedAreaPixels]);

  return (
    <Wrapper>
      {step === 1 && (
        <WrapperForm>
          <ModalHeader>Register now!</ModalHeader>

          <FormField
            {...register('nickname', { required: true })}
            id="nickname"
            name="nickname"
            type="text"
            placeholder="Nickname"
          />
          <FormField
            {...register('email', { required: true })}
            id="email"
            name="email"
            placeholder="E-mail"
          />
          <FormField
            {...register('password', { required: true })}
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          />
          <FormField
            {...register('confirmedPassword', { required: true })}
            id="confirmedPassword"
            name="confirmedPassword"
            type="password"
            placeholder="Confirm password"
          />
          <StyledSingupButton onClick={handleNextStep}>
            Next step
          </StyledSingupButton>
        </WrapperForm>
      )}
      {step === 2 && (
        <WrapperForm>
          <ModalHeader>Describe yourself</ModalHeader>

          <FormField
            {...register('bio')}
            id="bio"
            name="bio"
            placeholder="Bio"
            isTextArea
          />
          <DateFields>
            <FormField
              {...register('year', { required: true })}
              id="year"
              name="year"
              placeholder="E-mail"
              isSelect
              options={yearRange}
              selectLabel="Year"
            />

            <FormField
              {...register('month', { required: true })}
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              isSelect
              options={monthRange}
              selectLabel="Month"
            />
            <FormField
              {...register('day', { required: true })}
              id="confirmedPassword"
              name="confirmedPassword"
              type="password"
              placeholder="Confirm password"
              isSelect
              options={dayRange}
              selectLabel="Day"
            />
          </DateFields>
          <ButtonsWrapper>
            <StyledSingupButton onClick={handlePreviousStep}>
              Step back
            </StyledSingupButton>
            <StyledSingupButton onClick={handleNextStep}>
              Next step
            </StyledSingupButton>
          </ButtonsWrapper>
        </WrapperForm>
      )}
      {step === 3 && (
        <WrapperFormImage>
          <ModalHeader>Describe yourself</ModalHeader>
          <AvatarUpload type="button" onClick={handleClick}>
            Upload avatar
          </AvatarUpload>
          <AvatarInput
            {...register('avatar')}
            id="avatar"
            name="avatar"
            placeholder="avatar"
            type="file"
            accept="image/*"
            ref={hiddenFileInput}
            onChange={handleImageUpload}
          />
          <AvatarWrapper>
            {isSelectedImage && (
              <>
                <ResizeImage>
                  <Cropper
                    image={selectedImage}
                    crop={crop}
                    zoom={zoom}
                    aspect={4 / 3}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                    showGrid={false}
                    objectFit="vertical-cover"
                  />
                </ResizeImage>
                <SliderWrapper>
                  <Slider
                    type="range"
                    value={zoom}
                    min={1}
                    max={3}
                    step={0.1}
                    aria-labelledby="Zoom"
                    onChange={(e) => {
                      setZoom(Number(e.target.value));
                    }}
                    className="zoom-range"
                  />
                </SliderWrapper>
              </>
            )}
            {croppedImage && <img src={croppedImage} alt="CroppedImage" />}
          </AvatarWrapper>
          <ButtonsWrapper>
            <StyledSingupButton onClick={handlePreviousStep}>
              Step back
            </StyledSingupButton>
            <StyledSingupButton onClick={showCroppedImage}>
              CreateAccount
            </StyledSingupButton>
          </ButtonsWrapper>
        </WrapperFormImage>
      )}
    </Wrapper>
  );
};

export default SignupForm;
