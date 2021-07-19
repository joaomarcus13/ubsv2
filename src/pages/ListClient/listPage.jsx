/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable array-callback-return */
/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaSearch, FaTrashAlt, FaEdit } from 'react-icons/fa';
import List from '../../components/list/listComponent';
import InputSearch from '../../components/inputSearch/inputComponent';
import { Container } from '../../styles/global';
import { SearchArea, ComponentContainer, AdvancedSearch } from './listStyle';
import Filter from '../../components/filter/filterComponent';
import history from '../../services/homeHistory';
import useClientsFiltered from '../../hooks/useClientsFiltered';
import useFilterSearch from '../../hooks/useFilterSearch';
import useConfirmPopUp from '../../hooks/useConfirmPopUp';
import ConfirmDialog from '../../components/confirmDialog/confirmDialogComponent';
import actions from '../../store/modules/application/actions';

function Register() {
  const [clientsFiltered, setClientsFiltered] = useState([]);
  const { filterSearch, handleSelectFilter, inputRef } = useFilterSearch({
    name: 'nome',
  });
  const [confirmPopUp, setConfirmPopUp] = useConfirmPopUp(false);
  const [clientSelected, setClientSelected] = useState(null);
  const [advancedSearchIsVisible, setAdvancedSearchIsVisible] = useState(false);
  const [intervalValue, setIntervalValue] = useState({
    age: false,
    dateBirth: false,
  });

  const clients = useSelector((state) => state.application.clients);

  const dispatch = useDispatch();

  function handleSearch(e) {
    const { value } = e.target;
    setClientsFiltered(
      clients.filter((item) =>
        item[[Object.keys(filterSearch)]].includes(value)
      )
    );
  }

  function callbackActionIcons(item) {
    return (
      <>
        <div
          onClick={() => {
            history.push('/individual-view', item.id);
          }}
        >
          <FaSearch />
        </div>
        <div
          size={16}
          onClick={() => {
            history.push('/individual-edit', item);
          }}
        >
          <FaEdit />
        </div>
        <div
          onClick={() => {
            setClientSelected(item);
            setConfirmPopUp(true);
          }}
        >
          <FaTrashAlt />
        </div>
      </>
    );
  }

  function confirmDelete() {
    setConfirmPopUp(false);
    dispatch(actions.deleteClient(clientSelected));
  }

  function filterAdvanced() {
    console.log('filtro');
  }

  useEffect(() => {
    setClientsFiltered(clients);
  }, [clients, setClientsFiltered]);
  return (
    <>
      <ConfirmDialog
        title="deseja excluir o cidadão?"
        visible={confirmPopUp}
        confirm={confirmDelete}
        cancel={() => {
          setConfirmPopUp(false);
          setClientSelected(null);
        }}
      />

      <Container>
        <h1>Cidadãos Cadastrados</h1>
        <ComponentContainer>
          <SearchArea>
            <InputSearch
              innerRef={inputRef}
              width="250px"
              placeholder={[Object.values(filterSearch)]}
              onChange={handleSearch}
            />
            <Filter
              onChange={handleSelectFilter}
              data={{
                name: 'nome do cidadão',
                cns: 'cns',
                birthDate: 'data de nascimento',
              }}
            />

            <button
              type="button"
              className="advancedSearch"
              onClick={() => {
                setAdvancedSearchIsVisible((state) => !state);
              }}
            >
              pesquisa avancada
            </button>
          </SearchArea>

          <AdvancedSearch visible={advancedSearchIsVisible}>
            <div className="radioArea">
              <span>Sexo:</span>
              <label htmlFor="male">
                <input type="radio" name="gender" id="male" value="M" />
                masculino
              </label>
              <label htmlFor="female">
                <input type="radio" name="gender" id="female" value="F" />
                feminino
              </label>
            </div>
            <div>
              <span>Idade:</span>
              {intervalValue.age ? (
                <>
                  <input type="number" min="0" id="ageMin" placeholder="min" />
                  -
                  <input type="number" min="0" id="ageMax" placeholder="max" />
                </>
              ) : (
                <input type="number" min="0" id="age" />
              )}
              <button
                type="button"
                onClick={() => {
                  setIntervalValue((state) => ({ ...state, age: !state.age }));
                }}
              >
                {intervalValue.age ? 'idade unica' : 'Intervalo'}
              </button>
            </div>

            <div>
              <span>Data Nascimento:</span>
              {intervalValue.dateBirth ? (
                <>
                  <input type="date" id="birthDateMin" /> -
                  <input type="date" id="birthDateMax" />
                </>
              ) : (
                <input type="date" id="birthDate" />
              )}
              <button
                type="button"
                onClick={() => {
                  setIntervalValue((state) => ({
                    ...state,
                    dateBirth: !state.dateBirth,
                  }));
                }}
              >
                {intervalValue.dateBirth ? 'valor unico' : 'intervalo'}
              </button>
            </div>
            <div className="radioArea">
              <span>Raca/Cor:</span>
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

            <div className="radioArea">
              <span>escolaridade:</span>
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
              <span>situaçao no mercado de trabalho:</span>
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
            <button type="button" onClick={filterAdvanced}>
              Filtrar
            </button>
          </AdvancedSearch>

          <List
            data={clientsFiltered}
            headerData={{
              updated_at: 'data',
              name: 'nome do cidadão',
              cns: 'cns',
              birthDate: 'data de nascimento',
            }}
            detailsData={{
              name: 'Nome',
              cns: 'Cns',
              gender: 'Sexo',
              race: 'raça',
              mothersName: 'Nome da mãe',
              fathersName: 'Nome do pai',
              cityBirth: 'Cidade de nascimento',
              stateBirth: 'Estado de nascimento',
              age: 'Idade',
              phone: 'Telefone',
              scholarity: 'Escolaridade',
              situationLabor: 'Situação no mercado de trabalho',
            }}
            callbackIcons={callbackActionIcons}
          />
        </ComponentContainer>
      </Container>
    </>
  );
}

export default Register;
