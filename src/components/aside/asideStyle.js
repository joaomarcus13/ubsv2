import styled from 'styled-components';
import { values, colors } from '../../styles/vars';

export const Aside = styled.div`
  position: relative;
  width: 80px;
  height: calc(100vh - ${values.headerHeight});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 1px 0px 8px -5px black;
  /* background: ${colors.linear}; */
  z-index: 2;
  li {
    width: 80px;

    img {
      width: 35px;
      height: 35px;
      cursor: pointer;
      filter: drop-shadow(0px 0px 2px #000);
    }
  }
`;

export const DrawerAside = styled.div`
  height: calc(100% - ${values.headerHeight});
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  /* background-color: red; */
  position: absolute;
  box-shadow: 1px 0px 8px -5px black;
  top: 60px;
  z-index: 1;
  transition: all 0.2s linear 0.2s;
  transform: ${(props) =>
    props.drawerVisible ? 'translateX(80px)' : 'translateX(-100px)'};

  li {
    width: 180px;

    a {
      color: ${colors.textDark};
    }

    span {
      font-size: 0.9rem;
      cursor: pointer;
    }
  }
`;

export const List = styled.li`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: black; */
  background: white;
  /* box-shadow: 1px 0px 8px -5px black; */
  &:hover {
    filter: brightness(0.5);
  }
`;
