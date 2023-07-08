/* eslint-disable react/jsx-props-no-spreading */
import FormField from 'components/molecues/FormField/FormField';
import { StyledButton } from 'components/atoms/Button/Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AuthProvider } from 'hooks/useAuth';
import Signup from 'views/Singup/Signup';
import { CreateAccountButton, Wrapper } from './SignInForm.style';
import useModal from '../Modal/useModal';
import Modal from '../Modal/Modal';

type Inputs = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const { api, signIn, errorMessages } = AuthProvider();
  const {
    register: signInRegister,
    handleSubmit: signInHandleSubmit,
    formState: { errors: signInErrors },
  } = useForm<Inputs>();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const onSubmit: SubmitHandler<Inputs> = (data, event) => {
    event?.preventDefault();
    api()
      .get('/sanctum/csrf-cookie')
      .then(() => {
        signIn(data.email, data.password);
      });
  };
  return (
    <Wrapper key={1} onSubmit={signInHandleSubmit(onSubmit)}>
      <FormField
        {...signInRegister('email', { required: true })}
        id="email"
        name="email"
        placeholder="E-mail"
        isError={signInErrors.email}
        type="email"
      />
      {signInErrors.email && <span>Email is required</span>}
      {errorMessages.correctEmail === false && (
        <span>{errorMessages.error}</span>
      )}
      <FormField
        {...signInRegister('password', { required: true })}
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        isError={signInErrors.password}
      />
      {signInErrors.password && <span>Password is required</span>}
      {errorMessages.correctEmail && <span>{errorMessages.error}</span>}
      <StyledButton type="submit">Sign in</StyledButton>

      <CreateAccountButton type="button" onClick={handleOpenModal}>
        Create account
      </CreateAccountButton>

      <Modal isOpen={isOpen} handleClose={handleCloseModal}>
        <Signup key={3} />
      </Modal>
    </Wrapper>
  );
};

export default SignInForm;
