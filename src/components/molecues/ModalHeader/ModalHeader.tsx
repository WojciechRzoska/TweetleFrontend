import React, { PropsWithChildren } from 'react';
import { Wrapper } from './ModalHeader.style';

const ModalHeader = ({ children }: PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ModalHeader;
