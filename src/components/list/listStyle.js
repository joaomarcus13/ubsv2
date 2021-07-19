import styled from 'styled-components';
import { colors } from '../../styles/vars';

export const List = styled.ul`
  background-color: #fff;
  width: 100%;
  min-height: 197px;
  padding: 20px 30px;
  font-size: 0.85rem;
  border-radius: 5px;

  .header {
    display: flex;

    span {
      overflow: hidden;
      width: 260px;
      height: 30px;
      line-height: 30px;

      &:nth-child(2) {
        width: 450px;
      }

      &:last-child {
        width: 200px;
      }

      div {
        height: 100%;
        border-bottom: 3px solid #a9a9a9;
        margin-right: 8px;
        padding: 0 0 0 5px;
      }
    }
  }
`;

export const ListItem = styled.li`
  cursor: pointer;
  /* ${(props) =>
    props.openDetails ? 'box-shadow:0px 0px 3px 0px black;' : ''}; */
  border: ${(props) => props.openDetails && `1px ridge ${colors.border}`};

  position: relative;

  .body {
    display: flex;

    span {
      width: 260px;
      height: 30px;
      overflow: hidden;
      line-height: 30px;
      display: flex;
      align-items: center;

      &:nth-child(2) {
        width: 450px;
      }

      &:last-child {
        width: 200px;
      }

      &:last-child > div {
        width: 100%;
        margin-right: 16px;
        display: flex;
        align-items: center;
        justify-content: space-around;
      }

      /*icones */
      div > div {
        height: 100%;
        min-width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      div {
        padding: 5px 0;
        margin-left: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;

export const DetailsView = styled.div`
  background-color: ${(props) => props.color};
  display: flex;
  flex-wrap: wrap;
  margin-top: -25px;
  /* position: absolute; */
  /* z-index: 10; */

  border-bottom: 1px solid ${colors.border};
  /*border-left: 1px solid #b1b1b173;
  border-right: 1px solid #b1b1b173; */

  div {
    min-width: 400px;
    padding: 8px 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  span {
    /* text-transform: capitalize; */
  }

  span:first-child {
    font-weight: bold;
  }
`;
