import styled from 'styled-components';
import { colors } from '../../styles/vars';
import img from '../../assets/images/bg.jpg';

export const Container = styled.main`
  height: 100%;
  background-image: url(${img});
  background-size: cover;

  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Form = styled.form`
  height: 450px;
  width: 400px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.3);
  transition: all 1s ease;
  position: absolute;
  top: calc(50% - 225px);
  left: calc(25% - 200px);

  &.visible {
    left: calc(25% + 400px);
  }

  h1 {
    font-size: 1.5rem;
  }

  input,
  button {
    width: 70%;
    height: 40px;
    padding: 10px;
    border: none;
    border-radius: 4px;
  }

  span {
    color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
  }

  input {
    background-color: #ddd;
    text-align: center;
    font-size: 1rem;
  }
  input:focus::-webkit-input-placeholder {
    transition: all 0.3s;
    opacity: 0.3;
  }
  input::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.8);
  }

  button {
    background: ${colors.linear};
    color: white;
    font-size: 1rem;
    &:hover {
      background: ${colors.linearPrimary};
    }
  }
`;
