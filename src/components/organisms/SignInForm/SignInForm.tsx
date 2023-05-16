import FormField from 'components/molecues/FormField/FormField';
import React from 'react';
import { StyledButton } from 'components/atoms/Button/Button';
import { Wrapper } from './SignInForm.style';

const SignInForm = () => {
  return (
    <Wrapper>
      <FormField id="email" name="email" value="" placeholder="E-mail" />
      <FormField
        id="password"
        name="password"
        value=""
        type="password"
        placeholder="Password"
      />
      <StyledButton>Sign in</StyledButton>
    </Wrapper>
  );
};

export default SignInForm;
