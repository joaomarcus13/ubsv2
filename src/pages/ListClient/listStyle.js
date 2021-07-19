import styled from 'styled-components';
import { colors } from '../../styles/vars';

export const SearchArea = styled.div`
  width: 100%;
  background-color: ${colors.bgWhite};
  padding: 0px 30px;
  font-size: 0.85rem;
  border-radius: 5px;
  display: flex;
  align-items: center;

  .advancedSearch {
    margin-left: auto;
    border: none;
    background-color: transparent;
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
  gap: 40px;
`;

export const AdvancedSearch = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  /* height: 200px; */
  width: 100%;
  font-size: 0.85rem;
  background-color: ${colors.bgWhite};
  padding: 0 30px;
  flex-direction: column;
  gap: 15px;
  div {
    display: flex;
    gap: 10px;
    padding: 0 0 10px 0;
    border-bottom: 1px solid ${colors.borderPrimary};
    span {
      font-weight: bold;
      text-transform: capitalize;
      width: 130px;
    }
    & > label,
    input {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    button {
      height: 20px;
      line-height: 50%;
      background-color: transparent;
      padding: 5px;
      border: none;
      text-decoration: underline;
    }
    input[type='number'] {
      height: 20px;
      border-radius: 5px;
      padding: 5px;
      border: 1px solid ${colors.border};
      width: 50px;

      &::-webkit-outer-spin-button,
      ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
    input[type='date'] {
      height: 20px;
      padding: 5px;
      width: 170px;
    }
  }
`;
