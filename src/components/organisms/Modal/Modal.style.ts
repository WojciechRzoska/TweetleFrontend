import ReactModal from 'react-modal';
import { styled } from 'styled-components';

export const ModalWrapper = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 300px;
  min-height: 450px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  box-shadow: 0px -5px 25px -10px rgba(0, 0, 0, 0.3);
  display: flex;
  z-index: 1;
  flex-direction: column;
  opacity: 1;

  &:focus {
    outline: none;
  }

  @media (min-width: 60em) {
    width: 500px;
    min-height: 500px;
  }
`;
export const CloseButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  padding: 1rem;
  right: 3%;
`;
