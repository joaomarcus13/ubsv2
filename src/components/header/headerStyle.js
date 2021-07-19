import styled from 'styled-components';
import { colors, values } from '../../styles/vars';

export const Header = styled.header`
  position: sticky; ///////
  display: flex;
  align-items: center;
  height: ${values.headerHeight};
  background: ${colors.linear};
  z-index: 10;
  img {
    height: 60%;
    margin-left: 5%;
  }
  .spin {
    transform: rotateX(3.142rad);
    transition: all 0.3s linear;
  }
  div {
    width: 250px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: 50px;
    padding: 5px 10px;
    border-radius: 8px;
    cursor: pointer;

    span:first-child {
      z-index: 3;
      text-transform: capitalize;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      margin-right: 5px;
    }
    span:last-child {
      height: 18px;
      width: 18px;
    }
  }
`;

export const DropDown = styled.div`
  top: -80px;
  right: 50px;
  transform: ${(props) =>
    props.visible ? 'translateY(140px)' : 'translateY(0px)'};
  transition: all 0.3s ease;
  position: absolute;
  width: 250px;
  height: 140px;
  background-color: white;
  border: 1px solid #9e9c9c;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  z-index: 9;

  li {
    list-style: none;
    padding: 10px 15px;
    cursor: pointer;

    a {
      color: black;
    }

    &:hover {
      background-color: rgb(225, 225, 225);
    }

    &:last-child {
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
`;
