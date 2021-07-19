import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import { colors, values } from './vars';

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    outline:none;
    box-sizing:border-box;
    font-family:'Poppins', sans-serif;
}

body{

    background-color: #454646;

}

html,body,#root{
    height:100vh
}

button{
    cursor: pointer;
}

a{
    text-decoration:none;
}

li{
    list-style: none;
}

svg{
  cursor: pointer;
}

`;

export const Form = styled.form`
  border: 1px solid ${colors.borderPrimary};
  padding: 20px 20px;
  border-radius: 5px;
  max-width: 85%;
  background-color: ${colors.bgWhite};
  margin-bottom: 20px;

  .titleSection {
    margin-left: 5px;
  }

  .identification label {
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    margin: 10px 5px;
    position: relative;
  }

  .identification,
  .addRelation {
    position: relative;
    border: 1px solid ${colors.border};
    padding: 10px;
    border-radius: 5px;
    display: flex;
    /* min-height: 300px; */
    flex-wrap: wrap;
    margin-bottom: 30px;
  }
  .identification {
    select[name='stateBirth'],
    select[name='cityBirth'] {
      max-width: 160px;
      text-overflow: ellipsis;
    }

    .radioArea {
      border: 1px solid ${colors.border};
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      position: relative;
      margin: 8px 5px;
      padding: 5px;
      label {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 5px;

        & > input {
          margin-right: 3px;
        }
      }
      span {
        position: absolute;
        font-size: 0.8rem;
        top: -10px;
        left: 10px;
        padding: 0 3px;
        background-color: ${colors.bgWhite};
      }
    }

    input,
    select {
      background: ${colors.bgWhite};
      padding: 3px 5px;
      border: 1px solid #9e9c9c;
      border-radius: 5px;
      outline: none;
    }

    /* input[type='search'] {
    padding-left: 25px;
  } */

    select#state {
      width: 150px;
      overflow: hidden;
    }
    select#city {
      width: 150px;
      overflow: hidden;
    }

    .inputname {
      width: 500px;
    }
  }

  button {
    width: 100px;
    height: 30px;
    border: none;
    color: white;
    text-shadow: -3px 0px 30px rgba(0, 0, 0, 1);
    margin-top: 15px;
    border-radius: 5px;
  }

  button[type='submit'] {
    background-color: ${colors.primary};
    float: right;
  }
  button[type='reset'] {
    background-color: ${colors.cancel};
  }
`;

export const Container = styled.main`
  height: calc(100vh - ${values.headerHeight});
  background-color: ${colors.bgPrimary};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  position: relative;

  /* z-index: 1; */

  h1 {
    font-size: 1.2rem;
    padding: 10px 0;
  }
`;
