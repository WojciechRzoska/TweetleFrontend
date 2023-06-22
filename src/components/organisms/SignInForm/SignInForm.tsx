/* eslint-disable react/jsx-props-no-spreading */
import FormField from 'components/molecues/FormField/FormField';
import { StyledButton } from 'components/atoms/Button/Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { AuthProvider } from 'hooks/useAuth';
import ErrorMessage from 'components/molecues/ErrorMessage/ErrorMessage';
import Signup from 'views/Singup/Signup';
import { StyledSingupButton, Wrapper } from './SignInForm.style';
import useModal from '../Modal/useModal';
import Modal from '../Modal/Modal';

type Inputs = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const { api, signIn } = AuthProvider();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    console.log(errors.email);
  });
  const onSubmit: SubmitHandler<Inputs> = (data, event) => {
    event?.preventDefault();
    api()
      .get('/sanctum/csrf-cookie')
      .then(() => {
        signIn(data.email, data.password);
      });
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <FormField
        {...register('email', { required: true })}
        id="email"
        name="email"
        placeholder="E-mail"
        isError={errors.email}
      />
      {errors.email && <span>Email is required</span>}
      <FormField
        {...register('password', { required: true })}
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        isError={errors.password}
      />
      {errors.password && <span>Password is required</span>}
      <StyledButton type="submit">Sign in</StyledButton>

      <StyledSingupButton type="button" onClick={handleOpenModal}>
        Create account
      </StyledSingupButton>

      <Modal isOpen={isOpen} handleClose={handleCloseModal}>
        <Signup />
      </Modal>
    </Wrapper>
  );
};

export default SignInForm;
