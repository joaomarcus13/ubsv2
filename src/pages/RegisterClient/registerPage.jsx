/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Form } from '../../styles/global';

import ConfirmDialog from '../../components/confirmDialog/confirmDialogComponent';
import actions from '../../store/modules/application/actions';
import useConfirmPopUp from '../../hooks/useConfirmPopUp';
import useListStatesCities from '../../hooks/useListStatesCities';

function Register() {
  const { city, states, handleSelect } = useListStatesCities([]);
  const formRef = useRef(null);
  const dispatch = useDispatch();

  const [confirmPopUp, setConfirmPopUp] = useConfirmPopUp(false);

  function openDialog(e) {
    e.preventDefault();
    setConfirmPopUp(true);
  }

  function handleSubmit() {
    setConfirmPopUp(false);
    const data = {};
    const diseases = [];
    const form = formRef.current;
    for (const i of form) {
      switch (i.type) {
        case 'radio':
          if (i.checked) data[i.name] = i.value;
          break;
        case 'checkbox':
          if (i.checked) diseases.push(i.value);
          break;
        default:
          data[i.id] = i.value;
          break;
      }
    }
    data.diseases = diseases;
    console.log(data);

    dispatch(actions.createClient({ data, form }));
  }

  return (
    <>
      <ConfirmDialog
        title="deseja cadastrar o cidadao?"
        visible={confirmPopUp}
        confirm={handleSubmit}
        cancel={() => {
          setConfirmPopUp(false);
        }}
      />
      <Container>
        <h1> Ficha de Cadastro Individual</h1>

        <Form ref={formRef} onSubmit={openDialog}>
          <div className="titleSection">Identificação</div>
          <div className="identification">
            <label htmlFor="cns">
              Cns do Cidadão
              <input maxLength={15} type="text" name="cns" id="cns" />
            </label>
            <label htmlFor="name">
              Nome Completo
              <input
                maxLength={70}
                size={20}
                type="text"
                name="name"
                id="name"
                className="inputname"
              />
            </label>
            <label htmlFor="date">
              Data de nascimento
              <input type="date" name="birthDate" id="birthDate" />
            </label>
            <div className="radioArea">
              <span>Sexo</span>
              <label htmlFor="male">
                <input type="radio" name="gender" id="male" value="M" />
                masculino
              </label>
              <label htmlFor="female">
                <input type="radio" name="gender" id="female" value="F" />
                feminino
              </label>
            </div>
            <div className="radioArea">
              <span>Raca/Cor</span>
              <label htmlFor="branca">
                <input type="radio" name="race" id="branca" value="branca" />
                Branco
              </label>
              <label htmlFor="preta">
                <input type="radio" name="race" id="preta" value="preta" />
                preto
              </label>
              <label htmlFor="parda">
                <input type="radio" name="race" id="parda" value="parda" />
                parda
              </label>
              <label htmlFor="amarela">
                <input type="radio" name="race" id="amarela" value="amarela" />
                amarelo
              </label>
              <label htmlFor="indigena">
                <input
                  type="radio"
                  name="race"
                  id="indigena"
                  value="indigena"
                />
                indigena
              </label>
            </div>
            <label htmlFor="mothersName">
              nome da mae
              <input
                className="inputname"
                type="text"
                name="mothersName"
                id="mothersName"
              />
            </label>
            <label htmlFor="stateBirth">
              estado de nascimento
              <select name="stateBirth" id="stateBirth" onChange={handleSelect}>
                <option disabled value="" selected />
                {states.map((e) => (
                  <option key={e}>{e}</option>
                ))}
              </select>
            </label>
            <label htmlFor="cityBirth">
              municipio de nascimento
              <select name="cityBirth" id="cityBirth">
                {city.map((e) => (
                  <option key={e}>{e}</option>
                ))}
              </select>
            </label>
            <label htmlFor="fathersName">
              nome do pai
              <input
                className="inputname"
                type="text"
                name="fathersName"
                id="fathersName"
              />
            </label>
            <label htmlFor="phone">
              telefone
              <input type="tel" name="phone" id="phone" />
            </label>
            <div className="radioArea">
              <span>escolaridade</span>
              <label htmlFor="creche">
                <input
                  type="radio"
                  name="scholarity"
                  id="creche"
                  value="creche"
                />
                creche
              </label>
              <label htmlFor="preEscola">
                <input
                  type="radio"
                  name="scholarity"
                  id="preEscola"
                  value="pré-escola"
                />
                pre-escola
              </label>
              <label htmlFor="alfabetizacao">
                <input
                  type="radio"
                  name="scholarity"
                  id="alfabetizacao"
                  value="alfabetização"
                />
                alfabetizacao
              </label>
              <label htmlFor="fundamental">
                <input
                  type="radio"
                  name="scholarity"
                  id="fundamental"
                  value="ensino fundamental"
                />
                fundamental
              </label>
              <label htmlFor="medio">
                <input
                  type="radio"
                  name="scholarity"
                  id="medio"
                  value="ensino médio"
                />
                medio
              </label>
              <label htmlFor="superior">
                <input
                  type="radio"
                  name="scholarity"
                  id="superior"
                  value="ensino superior"
                />
                superior
              </label>
              <label htmlFor="none">
                <input
                  type="radio"
                  name="scholarity"
                  id="none"
                  value="nenhum"
                />
                nenhum
              </label>
            </div>
            <div className="radioArea">
              <span>situaçao no mercado de trabalho</span>
              <label htmlFor="assalariado">
                <input
                  type="radio"
                  name="situationLabor"
                  id="assalariado"
                  value="assalariado"
                />
                assalariado
              </label>
              <label htmlFor="autonomo">
                <input
                  type="radio"
                  name="situationLabor"
                  id="autonomo"
                  value="autônomo"
                />
                autonomo
              </label>
              <label htmlFor="desempregado">
                <input
                  type="radio"
                  name="situationLabor"
                  id="desempregado"
                  value="desempregado"
                />
                desempregado
              </label>
              <label htmlFor="aposentado">
                <input
                  type="radio"
                  name="situationLabor"
                  id="aposentado"
                  value="aposentado"
                />
                aposentado
              </label>
              <label htmlFor="outro">
                <input
                  type="radio"
                  name="situationLabor"
                  id="outro"
                  value="outro"
                />
                outro
              </label>
            </div>
            <div className="radioArea">
              <span>Doencas</span>
              <label htmlFor="diabetes">
                <input
                  type="checkbox"
                  name="diseases"
                  id="diabetes"
                  value="diabetes"
                />
                Diabetes
              </label>
              <label htmlFor="hipertensao">
                <input
                  type="checkbox"
                  name="diseases"
                  id="hipertensao"
                  value="hipertensão"
                />
                Hipertensao
              </label>
              <label htmlFor="mental">
                <input
                  type="checkbox"
                  name="diseases"
                  id="mental"
                  value="mental"
                />
                Doenca Mental
              </label>
              <label htmlFor="fisico">
                <input
                  type="checkbox"
                  name="diseases"
                  id="fisico"
                  value="fisico"
                />
                Deficiente Fisico
              </label>
              <label htmlFor="other">
                <input
                  type="checkbox"
                  name="diseases"
                  id="other"
                  value="outra"
                />
                Outro
              </label>
            </div>
          </div>
          <button type="submit">Cadastrar</button>
          <button id="btnReset" type="reset">
            Cancelar
          </button>
        </Form>
      </Container>
    </>
  );
}

export default Register;
