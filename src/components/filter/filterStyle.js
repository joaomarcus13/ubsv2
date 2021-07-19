import styled from 'styled-components';

export const Filter = styled.div`
  position: relative;
  display: flex;
  height: 20px;
  width: 40px;
  img {
    pointer-events: none;
    background-color: white;
    z-index: 10;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  select {
    position: absolute;
    border: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  span:last-child {
    position: absolute;
    background-color: #555;
    z-index: 20;
    color: white;
    padding: 3px;
    font-size: 12px;
    left: 100%;
    border-radius: 5px;
    top: -2px;
    pointer-events: none;
    opacity: 0;
    transition: all 0.5s ease 1s;
  }

  span:last-child:after {
    content: '';
    position: absolute;
    top: calc(50% - 5px);
    left: -5px;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent #555 transparent transparent;
  }
  &:hover span:last-child {
    opacity: 1;
  }
`;
