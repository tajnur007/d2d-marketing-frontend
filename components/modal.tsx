import React from 'react';
import ReactModal, { Props } from 'react-modal';

// Modal setting.
const modalStyles = {
  overlay: {
    zIndex: 10000,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    opacity: 1,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: 480,
    marginRight: '-50%',
    padding: 30,
    transform: 'translate(-50%, -50%)',
    border: '2px solid var(--color-gray-4)',
    borderRadius: '4px',
  },
};

export function Modal(props: Props) {
  const { style, ...rest } = props;

  return (
    <ReactModal ariaHideApp={false} style={{ ...modalStyles, ...style }} {...rest}>
      {props.children}
    </ReactModal>
  );
}
