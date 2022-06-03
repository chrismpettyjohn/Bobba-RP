import React, {useState} from 'react';
import {Button} from '../../button/Button';
import {ModalOverlay} from '../modal-overlay';
import {ModalButtonProps, ModalButtonState, defaultModalButtonState} from './ModalButton.types';

export function ModalButton({
  button,
  children,
  className = '',
  header,
  style,
}: ModalButtonProps) {
  const [state, setState] = useState<ModalButtonState>(defaultModalButtonState);

  function onToggle(): void {
    setState({
      showModal: !state.showModal,
    });
  }

  return (
    <>
      <Button
        className={`rounded-button white plain ${className}`}
        onClick={onToggle}
        style={style}
      >
        {button}
      </Button>
      <ModalOverlay
        header={header}
        isOpen={state.showModal}
        onToggle={onToggle}
      >
        {children}
      </ModalOverlay>
    </>
  );
}
