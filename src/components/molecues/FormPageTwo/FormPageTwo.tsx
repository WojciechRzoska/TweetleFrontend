import {
  ButtonsWrapper,
  DateFields,
  WrapperForm,
} from 'components/organisms/SignupForm/SignupForm.style';
import {
  UseFormHandleSubmit,
  UseFormRegister,
  useForm,
  useFormContext,
} from 'react-hook-form';
import { RegisterUser } from 'types/UserInterface';
import { StyledSingupButton } from 'components/organisms/SignInForm/SignInForm.style';
import React from 'react';
import ModalHeader from '../ModalHeader/ModalHeader';
import FormField from '../FormField/FormField';

interface ChildComponentProps {
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

const FormPageTwo = ({
  handleNextStep,
  handlePreviousStep,
}: ChildComponentProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors: errorsForm },
  } = useFormContext<RegisterUser>();
  const currentYear = new Date().getFullYear();
  const yearRange = Array.from(
    { length: 101 },
    (_, index) => currentYear - index
  );
  const monthRange = Array.from({ length: 12 }, (_, index) => 1 + index);
  const dayRange = Array.from({ length: 31 }, (_, index) => 1 + index);

  return (
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
  );
};

export default FormPageTwo;
