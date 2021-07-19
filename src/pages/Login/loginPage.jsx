/* eslint-disable no-useless-return */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import { Container, Form } from './loginStyle';
import actions from '../../store/modules/auth/actions';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailRegister, setEmailRegister] = useState('');
  const [nameRegister, setNameRegister] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');
  const [confirmPasswordRegister, setConfirmPasswordRegister] = useState('');

  const isRegisterVisible = useSelector(
    (state) => state.auth.isRegisterVisible
  );

  const dispatch = useDispatch();

  function emptyFields(...fields) {
    if (fields.reduce((acc, value) => !acc || !value)) {
      toast.error('Todos os campos devem ser preenchidos!');
      return true;
    }
    return false;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (emptyFields(email, password)) return;
    dispatch(actions.loginRequest({ email, password }));
  }

  function handleRegister(e) {
    e.preventDefault();

    if (
      emptyFields(
        emailRegister,
        nameRegister,
        passwordRegister,
        confirmPasswordRegister
      )
    )
      return;

    if (passwordRegister !== confirmPasswordRegister) {
      toast.error('campos de senha não conferem');
      return;
    }

    if (passwordRegister.length < 6 || passwordRegister.length > 50) {
      toast.error('campos de senha deve ter entre 6 e 50 caracters');
      return;
    }

    dispatch(
      actions.registerRequest({ emailRegister, nameRegister, passwordRegister })
    );

    setEmailRegister('');
    setNameRegister('');
    setPasswordRegister('');
    setConfirmPasswordRegister('');
  }

  const openRegister = () => dispatch(actions.registerOpen());

  return (
    <Container>
      <div>
        <Form
          onSubmit={handleRegister}
          className={`${isRegisterVisible ? 'visible' : ''}`}
        >
          <h1>Criar Conta</h1>
          <input
            type="email"
            id="email-register"
            placeholder="email"
            // autoComplete="off"
            value={emailRegister}
            onChange={(e) => setEmailRegister(e.target.value)}
          />
          <input
            type="text"
            id="name"
            placeholder="nome"
            autoComplete="off"
            value={nameRegister}
            onChange={(e) => setNameRegister(e.target.value)}
          />

          <input
            type="password"
            id="password-register"
            placeholder="senha"
            value={passwordRegister}
            onChange={(e) => setPasswordRegister(e.target.value)}
          />
          <input
            type="password"
            id="confirm-password"
            placeholder="confirme sua senha"
            value={confirmPasswordRegister}
            onChange={(e) => setConfirmPasswordRegister(e.target.value)}
          />
          <button type="submit">Confirmar</button>
        </Form>
      </div>

      <div>
        <Form onSubmit={handleSubmit}>
          <h1>Login</h1>

          <input
            type="email"
            id="email"
            placeholder="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            id="password"
            placeholder="senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Acessar</button>
          <span
            role="button"
            tabIndex={0}
            onClick={() => {
              openRegister();
            }}
            onKeyDown={() => {
              openRegister();
            }}
          >
            Criar Conta
          </span>
        </Form>
      </div>
    </Container>
  );
}

export default Login;
