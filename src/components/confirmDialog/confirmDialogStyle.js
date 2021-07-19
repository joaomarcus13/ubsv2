import styled from 'styled-components';
import { colors } from '../../styles/vars';

export const Container = styled.div`
  z-index: 30;
  position: absolute;
  top: 20%;
  left: calc(50% - 150px);
  height: 200px;
  width: 300px;
  background-color: #fff;
  border-radius: 8px;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 0px 5px 1px #afafaf;

  h1 {
    font-size: 1rem;
  }

  div {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;

    button {
      border: none;
      padding: 8px 15px;
      border-radius: 5px;
      color: white;
      text-shadow: -3px 0px 30px rgba(0, 0, 0, 1);
    }

    button:first-of-type {
      background-color: ${colors.cancel};
    }
    button:last-of-type {
      background-color: ${colors.primary};
    }
  }
`;
