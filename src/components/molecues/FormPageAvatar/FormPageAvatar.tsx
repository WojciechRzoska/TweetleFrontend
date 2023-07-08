import {
  AvatarInput,
  AvatarUpload,
  AvatarWrapper,
  ButtonsWrapper,
  ResizeImage,
  Slider,
  SliderWrapper,
  WrapperFormImage,
} from 'components/organisms/SignupForm/SignupForm.style';

import React, { useCallback, useState } from 'react';
import getCroppedImg from 'helpers/cropImage';
import Cropper, { Area } from 'react-easy-crop';
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  useForm,
  useFormContext,
} from 'react-hook-form';
import { StyledSingupButton } from 'components/organisms/SignInForm/SignInForm.style';
import { RegisterUser } from 'types/UserInterface';
import ModalHeader from '../ModalHeader/ModalHeader';
import {
  CropButton,
  CroppedImage,
  CroppedImageWrapper,
  FormPageAvatarButtons,
} from './FormPageAvatar.style';

interface ChildComponentProps {
  handlePreviousStep: () => void;
}
const FormPageAvatar = ({ handlePreviousStep }: ChildComponentProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors: errorsForm },
  } = useFormContext<RegisterUser>();
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
      setValue('avatar', croppingImage);
    } catch (e) {
      console.error(e);
    }
  }, [selectedImage, croppedAreaPixels, setValue]);

  const onSubmit2: SubmitHandler<RegisterUser> = (data, event) => {
    console.log(data);
  };
  return (
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

      {isSelectedImage && (
        <AvatarWrapper>
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
          <CropButton onClick={handleSubmit(showCroppedImage)}>
            Crop image
          </CropButton>
        </AvatarWrapper>
      )}
      {croppedImage && (
        <CroppedImageWrapper>
          <CroppedImage src={croppedImage} alt="CroppedImage" />
        </CroppedImageWrapper>
      )}

      <FormPageAvatarButtons>
        <StyledSingupButton onClick={handlePreviousStep}>
          Step back
        </StyledSingupButton>
        <StyledSingupButton
          disabled={!croppedImage}
          type="submit"
          onClick={handleSubmit(onSubmit2)}
        >
          create
        </StyledSingupButton>
      </FormPageAvatarButtons>
    </WrapperFormImage>
  );
};

export default FormPageAvatar;
