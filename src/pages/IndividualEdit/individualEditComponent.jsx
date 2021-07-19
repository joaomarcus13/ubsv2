/* eslint-disable react/button-has-type */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-this-in-sfc */
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { Container, Form } from '../../styles/global';
import actions from '../../store/modules/application/actions';
import useConfirmPopUp from '../../hooks/useConfirmPopUp';
import ConfirmDialog from '../../components/confirmDialog/confirmDialogComponent';
import useListStatesCities from '../../hooks/useListStatesCities';

function IndividualView(props) {
  const { location } = props;

  const date = moment(new Date(location.state.birthDate)).format('YYYY-MM-DD');
  const { handleSelect, states, city, setCity } = useListStatesCities([]);
  const [cns, setCns] = useState(location.state.cns);
  const [name, setName] = useState(location.state.name);
  const [birthDate, setBirthDate] = useState(date);
  const [mothersName, setMothersName] = useState(location.state.mothersName);
  const [fathersName, setFathersName] = useState(location.state.fathersName);
  const [cityBirth, setCityBirth] = useState(location.state.cityBirth);
  const [stateBirth, setStateBirth] = useState(location.state.stateBirth);
  const [phone, setPhone] = useState(location.state.phone);

  const [confirmPopUp, setConfirmPopUp] = useConfirmPopUp(false);

  const diseases = useMemo(
    () =>
      location.state.Diseases ? location.state.Diseases.map((e) => e.name) : [],
    [location.state.Diseases]
  );

  const formRef = useRef(null);
  const dispatch = useDispatch();

  const init = useCallback(() => {
    const form = formRef.current;

    for (const input of form) {
      if (input.type === 'checkbox') {
        if (diseases.includes(input.value)) {
          input.checked = true;
        } else {
          input.checked = false;
        }
      }
      if (location.state[input.name] === input.value) {
        input.checked = true;
      } else {
        input.checked = false;
      }
    }
  }, [diseases, location.state]);

  function reset() {
    setName(location.state.name);
    setPhone(location.state.phone);
    setStateBirth(location.state.stateBirth);
    setCityBirth(location.state.cityBirth);
    setMothersName(location.state.mothersName);
    setFathersName(location.state.fathersName);
    setCns(location.state.cns);
    setBirthDate(date);
    setCity([]);
  }

  function handleReset(e) {
    e.preventDefault();
    init();
    reset();
  }

  function handleSubmit(e) {
    e.preventDefault();
    setConfirmPopUp(false);
    const data = { ...location.state };
    const diseasesList = [];
    const form = formRef.current;
    for (const i of form) {
      switch (i.type) {
        case 'radio':
          if (i.checked) data[i.name] = i.value;
          break;
        case 'checkbox':
          if (i.checked) diseasesList.push(i.value);
          break;
        default:
          data[i.id] = i.value;
          break;
      }
    }
    data.diseases = diseasesList;

    dispatch(actions.updateClient(data));
  }

  // function handleSelect(e) {
  //   const [state] = statesCities.filter((st) => st.nome === e.target.value);
  //   const cities = state.cidades;
  //   setCity(cities);
  // }

  function openDialog(e) {
    e.preventDefault();
    setConfirmPopUp(true);
  }

  useEffect(() => {
    init();
  }, [init]);

  return (
    <>
      <ConfirmDialog
        title="deseja editar o dados?"
        visible={confirmPopUp}
        confirm={handleSubmit}
        cancel={() => {
          setConfirmPopUp(false);
        }}
      />
      <Container>
        <h1>Edição Ficha Individual</h1>
        <Form ref={formRef} onSubmit={openDialog} onReset={handleReset}>
          <div className="identification">
            <label htmlFor="cns">
              Cns do Cidadão
              <input
                maxLength={15}
                type="text"
                id="cns"
                value={cns}
                onChange={(e) => {
                  setCns(e.target.value);
                }}
              />
            </label>
            <label htmlFor="name">
              Nome Completo
              <input
                // maxLength={70}
                // size={20}
                type="text"
                id="name"
                className="inputname"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
            <label htmlFor="date">
              Data de nascimento
              <input
                type="date"
                id="birthDate"
                value={birthDate}
                onChange={(e) => {
                  setBirthDate(e.target.value);
                }}
              />
            </label>
            <div className="radioArea">
              <span>Sexo</span>
              <label htmlFor="male">
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="M"
                  // checked={gender === 'M'}
                />
                masculino
              </label>
              <label htmlFor="female">
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="F"
                  // checked={gender === 'F'}
                />
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
              Nome da mãe
              <input
                className="inputname"
                type="text"
                id="mothersName"
                value={mothersName}
                onChange={(e) => {
                  setMothersName(e.target.value);
                }}
              />
            </label>
            <label htmlFor="stateBirth">
              estado de nascimento
              <select
                id="stateBirth"
                value={stateBirth}
                onChange={(e) => {
                  setStateBirth(e.target.value);
                  handleSelect(e);
                }}
              >
                {states.map((e) => (
                  <option key={e}>{e}</option>
                ))}
              </select>
            </label>
            <label htmlFor="cityBirth">
              municipio de nascimento
              <select
                id="cityBirth"
                value={cityBirth}
                onChange={(e) => {
                  setCityBirth(e.target.value);
                }}
              >
                {city.length === 0 ? <option>{cityBirth}</option> : <></>}

                {city.map((e) => (
                  <option key={e}>{e}</option>
                ))}
              </select>
            </label>
            <label htmlFor="fathersName">
              Nome do pai
              <input
                className="inputname"
                type="text"
                id="fathersName"
                value={fathersName}
                onChange={(e) => {
                  setFathersName(e.target.value);
                }}
              />
            </label>
            <label htmlFor="phone">
              Telefone
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
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
                autônomo
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
          <button type="submit">Salvar</button>
          <button type="reset">Cancelar</button>
        </Form>
      </Container>
    </>
  );
}

export default IndividualView;
