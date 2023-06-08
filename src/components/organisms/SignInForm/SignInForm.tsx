/* eslint-disable react/jsx-props-no-spreading */
import FormField from 'components/molecues/FormField/FormField';
import { StyledButton } from 'components/atoms/Button/Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AuthProvider } from 'hooks/useAuth';
import { Wrapper } from './SignInForm.style';

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
      />

      <FormField
        {...register('password', { required: true })}
        id="password"
        name="password"
        type="password"
        placeholder="Password"
      />
      <StyledButton type="submit">Sign in</StyledButton>
    </Wrapper>
  );
};

export default SignInForm;
