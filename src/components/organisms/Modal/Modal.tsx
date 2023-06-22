import React, { PropsWithChildren } from 'react';
import ModalHeader from 'components/molecues/ModalHeader/ModalHeader';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CloseButton, ModalWrapper } from './Modal.style';

interface Props extends PropsWithChildren {
  handleClose: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
  isOpen: boolean;
}

const Modal = ({ handleClose, isOpen, children }: Props) => {
  return (
    <ModalWrapper
      appElement={document.getElementById('root') as HTMLElement}
      isOpen={isOpen}
      onRequestClose={handleClose}
    >
      <CloseButton type="button" onClick={handleClose}>
        <FontAwesomeIcon icon={faXmark} />
      </CloseButton>
      {children}
    </ModalWrapper>
  );
};

export default Modal;
