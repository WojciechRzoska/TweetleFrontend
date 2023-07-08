import { useState } from 'react';
import { AuthProvider } from 'hooks/useAuth';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { RegisterUser } from 'types/UserInterface';
import FormPageTwo from 'components/molecues/FormPageTwo/FormPageTwo';
import SignInFormPageOne from 'components/molecues/SignInFormPageOne/SignInFormPageOne';
import axios from 'axios';
import FormPageAvatar from 'components/molecues/FormPageAvatar/FormPageAvatar';
import { Wrapper } from './SignupForm.style';

const SignupForm = () => {
  const [step, setStep] = useState(1);
  const [disableButton, setDisableButton] = useState(false);

  const { api } = AuthProvider();

  const {
    formState: { errors: SignUpErrors },
  } = useForm<RegisterUser>();

  const methods = useForm<RegisterUser>();

  const handleNextStep = () => {
    setStep(step + 1);
  };

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
