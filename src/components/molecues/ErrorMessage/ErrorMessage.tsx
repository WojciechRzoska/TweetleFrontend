import React, { Children, PropsWithChildren } from 'react';
import { ErrorWrapper } from './ErrorMessage.style';

const ErrorMessage = ({ children }: PropsWithChildren) => {
  return <ErrorWrapper>{children}</ErrorWrapper>;
};

export default ErrorMessage;
