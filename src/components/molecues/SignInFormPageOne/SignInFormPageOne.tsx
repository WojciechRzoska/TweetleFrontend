import { WrapperForm } from 'components/organisms/SignupForm/SignupForm.style';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RegisterUser } from 'types/UserInterface';
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  useForm,
  useFormContext,
} from 'react-hook-form';
import { StyledSingupButton } from 'components/organisms/SignInForm/SignInForm.style';

import ModalHeader from '../ModalHeader/ModalHeader';
import FormField from '../FormField/FormField';

interface ChildComponentProps {
  handleNextStep: () => void;
}
interface Errors {
  [key: string]: string[];
}
const SignInFormPageOne = ({ handleNextStep }: ChildComponentProps) => {
  const [errorsApi, setErrorsApi] = useState<Errors>({});
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors: errorsForm },
  } = useFormContext<RegisterUser>();

  const validatePageOne: SubmitHandler<RegisterUser> = async (data, event) => {
    event?.preventDefault();
    axios
      .post('http://localhost:80/api/v1/validate/PageOne', {
        nickname: data.nickname,
        email: data.registerEmail,
        password: data.registerPassword,
        password_confirmation: data.password_confirmation,
      })
      .then((res) => {
        handleNextStep();
      })
      .catch((e) => {
        setErrorsApi(e.response.data);
      });
  };

  return (
    <WrapperForm>
      <ModalHeader>Register now!</ModalHeader>

      <FormField
        {...register('nickname', { required: true })}
        id="nickname"
        name="nickname"
        type="text"
        placeholder="Nickname"
        isError={errorsApi.nickname || errorsForm.nickname}
      />
      {errorsForm.nickname && <span>Nickname is required</span>}
      {errorsApi.nickname ? <span>{errorsApi.nickname[0]}</span> : null}
      <FormField
        {...register('registerEmail', { required: true })}
        id="registerEmail"
        name="registerEmail"
        placeholder="E-mail"
        isError={errorsApi.email || errorsForm.registerEmail}
      />
      {errorsForm.registerEmail && <span>Email is required</span>}
      {errorsApi.email ? <span>{errorsApi.email[0]}</span> : null}
      <FormField
        {...register('registerPassword', { required: true })}
        id="registerPassword"
        name="registerPassword"
        type="password"
        placeholder="Password"
        isError={errorsApi.password || errorsForm.registerPassword}
      />
      {errorsForm.registerPassword && <span>Password is required</span>}
      {errorsApi.password ? <span>{errorsApi.password[0]}</span> : null}
      <FormField
        {...register('password_confirmation', { required: true })}
        id="password_confirmation"
        name="password_confirmation"
        type="password"
        placeholder="Confirm password"
        isError={errorsApi.password || errorsForm.registerPassword}
      />
      {errorsForm.password_confirmation && (
        <span>Password confirmation is required</span>
      )}
      <StyledSingupButton onClick={handleSubmit(validatePageOne)}>
        Next step
      </StyledSingupButton>
    </WrapperForm>
  );
};

export default SignInFormPageOne;
