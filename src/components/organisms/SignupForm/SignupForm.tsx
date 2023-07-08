import ModalHeader from 'components/molecues/ModalHeader/ModalHeader';
import React, { useCallback, useEffect, useState } from 'react';
import FormField from 'components/molecues/FormField/FormField';
import { AuthProvider } from 'hooks/useAuth';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import getCroppedImg from 'helpers/cropImage';
import { RegisterUser } from 'types/UserInterface';
import FormPageTwo from 'components/molecues/FormPageTwo/FormPageTwo';
import { faL } from '@fortawesome/free-solid-svg-icons';
import SignInFormPageOne from 'components/molecues/SignInFormPageOne/SignInFormPageOne';
import axios from 'axios';
import FormPageAvatar from 'components/molecues/FormPageAvatar/FormPageAvatar';

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
  const [disableButton, setDisableButton] = useState(false);

  const { api } = AuthProvider();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors: SignUpErrors },
  } = useForm<RegisterUser>();

  const methods = useForm<RegisterUser>();

  const handleNextStep = () => {
    setStep(step + 1);
  };
  // const handleDisableButtonPageOne = () => {
  //   if (
  //     watch('nickname').length === 0 ||
  //     watch('email').length === 0 ||
  //     watch('password').length === 0 ||
  //     watch('password_confirmation').length === 0
  //   ) {
  //     setDisableButton(true);
  //   } else setDisableButton(false);
  // };

  const validatePageOne: SubmitHandler<RegisterUser> = async (data) => {
    axios
      .post('http://localhost:80/api/v1/validate', {
        nickname: data.nickname,
        email: data.registerEmail,
        password: data.registerPassword,
        password_confirmation: data.password_confirmation,
      })
      .then((res) => handleNextStep())
      .catch((e) => console.log(e));
  };

  const onSubmit2: SubmitHandler<RegisterUser> = (data, event) => {
    console.log(data);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  return (
    <FormProvider {...methods}>
      <Wrapper key={2}>
        {step === 1 && <SignInFormPageOne handleNextStep={handleNextStep} />}
        {step === 2 && (
          <FormPageTwo
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        )}
        {step === 3 && (
          <FormPageAvatar handlePreviousStep={handlePreviousStep} />
        )}
      </Wrapper>
    </FormProvider>
  );
};

export default SignupForm;
