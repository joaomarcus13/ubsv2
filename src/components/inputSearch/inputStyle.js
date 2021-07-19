import styled from 'styled-components';
import { colors } from '../../styles/vars';

export const Container = styled.div`
  position: relative;

  div {
    position: absolute;
    background-color: #d2e8e2;
    border: 1px solid #9e9c9c;
    height: 100%;
    padding: 0 6px;
    display: flex;
    align-items: center;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
  }
`;

export const Input = styled.input`
  width: ${(props) => props.width};
  background: ${colors.bgWhite};
  padding: 3px 5px;
  border: 1px solid #9e9c9c;
  border-radius: 5px;
  outline: none;
  padding-left: 30px;
`;
