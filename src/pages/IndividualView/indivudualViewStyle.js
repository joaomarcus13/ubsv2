import styled from 'styled-components';
import { colors } from '../../styles/vars';

export const View = styled.div`
  /* border: 1px solid #909090;
  padding: 30px 30px;
  border-radius: 5px;
  width: 85%;
  background-color: ${colors.bgWhite};
  margin-bottom: 20px; */

  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    text-transform: capitalize;
    font-size: 0.85rem;

    & > .item,
    div {
      display: flex;
      flex-direction: column;
      min-width: 200px;

      span {
        font-weight: 400;
        text-transform: capitalize;
      }
      span:last-child {
        border: 1px solid ${colors.borderPrimary};
        border-radius: 5px;
        padding: 5px;
      }
      span:first-child {
        margin-left: 3px;
        font-weight: bold;
        background-color: #fff;
      }
      span.large {
        width: 400px;
      }
    }

    & .loading {
      display: flex;
      gap: 5px;
      span {
        color: transparent;
        animation: animate 0.8s linear infinite alternate;
      }
      span:first-child {
        margin: 0;
        width: 100px;
        background-color: rgb(216, 216, 216);
      }
      span:last-child {
        height: 20px;
        border: none;
        background-color: rgb(216, 216, 216);
      }
      @keyframes animate {
        0% {
          opacity: 0.5;
        }
        50% {
          opacity: 0.7;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }
`;

export const ComponentContainer = styled.div`
  border: 1px solid #909090;
  padding: 30px 30px;
  border-radius: 5px;
  width: 85%;
  background-color: ${colors.bgWhite};
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const ViewDiseases = styled.div`
  position: relative;
  border: 1px solid ${colors.border};
  border-radius: 5px;
  padding: 15px 10px;
  display: flex;
  flex-direction: row;

  & > span {
    position: absolute;
    top: -15px;
    background-color: #fff;
    left: 5px;
    padding: 0 5px;
    font-weight: bold;
  }
  div {
    padding: 5px 10px;
  }
`;
