/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import { Container } from './confirmDialogStyle';

function confirmDialog({ title, visible, confirm, cancel }) {
  return (
    <Container visible={visible}>
      <h1>{title}</h1>
      <div>
        <button type="button" onClick={cancel}>
          Não
        </button>
        <button type="button" autoFocus onClick={confirm}>
          Sim
        </button>
      </div>
    </Container>
  );
}

export default confirmDialog;
