import styled from 'styled-components';
import { colors } from '../../styles/vars';

// export const View = styled.div`
//   border: 1px solid #909090;
//   padding: 30px 30px;
//   border-radius: 5px;
//   width: 85%;
//   background-color: ${colors.bgWhite};
//   margin-bottom: 20px;

//   .container {
//     display: flex;
//     flex-direction: column;
//   }

//   .identification {
//     display: flex;
//     justify-content: space-around;
//     flex-wrap: wrap;
//     border-top: 1px solid ${colors.border};
//     border-radius: 5px;
//     gap: 30px;
//     margin-bottom: 50px;

//     & > div {
//       display: flex;
//       flex-direction: column;

//       gap: 5px;
//       /* background-color: rgba(235, 235, 235); */
//       padding: 5px 10px;
//       border-radius: 5px;

//       span {
//         font-weight: 400;
//         /* background-color: rgba(245, 245, 245); */
//         padding: 0 5px;
//         text-transform: capitalize;
//       }
//       span:first-child {
//         /* background-color: rgba(235, 235, 235); */
//         padding: 0;
//         font-weight: bold;
//         text-transform: capitalize;
//       }
//       span.inputname {
//         width: 300px;
//       }
//     }
//   }

//   .residents {
//     & > span {
//       padding: 10px;
//       font-weight: bold;
//     }
//     & > div {
//       margin-top: 5px;
//       border-top: 1px solid ${colors.border};
//       border-radius: 5px;

//       .information {
//         font-size: 0.9rem;
//         margin-top: 15px;
//         margin-left: 50px;
//         color: #5a5a5a;
//       }
//     }
//   }
// `;

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

    & > div {
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

    .diseases {
      position: relative;
      border: 1px solid ${colors.borderPrimary};
      border-radius: 5px;
      padding: 15px 10px;
      display: flex;
      flex-direction: row;

      & > span {
        position: absolute;
        top: -10px;
        left: 5px;
        padding: 0 5px;
      }
      div {
        padding: 5px 10px;
      }
    }
  }
`;

export const ViewResident = styled.div`
  /* border: 1px solid #909090;
  padding: 30px 30px;
  border-radius: 5px;
  width: 85%;
  background-color: ${colors.bgWhite};
  margin-bottom: 20px; */

  .title {
    padding: 10px;
    font-weight: bold;
  }
  & > div {
    margin-top: 5px;
    border-top: 1px solid ${colors.border};
    border-radius: 5px;

    .information {
      font-size: 0.9rem;
      margin-top: 15px;
      margin-left: 50px;
      color: #5a5a5a;
    }
  }
`;
