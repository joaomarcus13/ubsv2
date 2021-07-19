/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FaUserPlus,
  FaSearch,
  FaTrashAlt,
  FaEdit,
  FaTimes,
} from 'react-icons/fa';
import { toast } from 'react-toastify';
import { func } from 'prop-types';

import { Container, Form } from '../../styles/global';

import ConfirmDialog from '../../components/confirmDialog/confirmDialogComponent';
import Filter from '../../components/filter/filterComponent';
import { SearchArea, SectionForm } from './registerStyle';
import InputSearch from '../../components/inputSearch/inputComponent';
import List from '../../components/list/listComponent';
import actions from '../../store/modules/application/actions';
import useClientsFiltered from '../../hooks/useClientsFiltered';
import useFilterSearch from '../../hooks/useFilterSearch';
import useClientsToAdd from '../../hooks/useClientsToAdd';

function Register(props) {
  console.log('register residence');
  const { location } = props;
  const residence = location.state || null;
  const clientsPrevious = residence?.Clients || null;
  const formRef = useRef(null);
  const typeList = useMemo(() => ['domicilio', 'comercio', 'outro'], []);
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const {
    clientsSelected,
    setClientsSelected,
    handleAddClient,
    cancelAddClient,
    clientsFiltered,
    setClientsFiltered,
  } = useClientsToAdd([]);
  const [neighborhood, setNeighborhood] = useState(
    residence?.neighborhood || ''
  );
  const [streetName, setStreetName] = useState(residence?.streetName || '');
  const [number, setNumber] = useState(residence?.number || '');
  const [type, setType] = useState(residence?.type || '');
  // const [confirmAddClient, setConfirmAddClient] = useState(false);
  // const [clientsFiltered, setClientsFiltered] = useClientsFiltered();
  const { filterSearch, handleSelectFilter, inputRef } = useFilterSearch({
    name: 'nome',
  });
  // const [clientsSelected, setClientsSelected] = useState([]);
  const clients = useSelector((state) => state.application.clients);
  const dispatch = useDispatch();

  function openDialogSubmit(e) {
    e.preventDefault();
    setConfirmSubmit(true);
  }

  function callbackCancelAddIcon(item) {
    return (
      <div
        onClick={() => {
          cancelAddClient(item);
        }}
      >
        <FaTimes color="#ef1010" size={18} />
      </div>
    );
  }

  function callbackAddClientIcon(item) {
    return (
      <div
        onClick={() => {
          handleAddClient(item);
        }}
      >
        <FaUserPlus size={18} />
      </div>
    );
  }

  const init = () => {
    const form = formRef.current;
    for (const input of form) {
      if (!residence) {
        input.checked = false;
        continue;
      }
      if (location.state[input.name] === input.value) {
        input.checked = true;
      } else {
        input.checked = false;
      }
    }
    setNeighborhood(residence?.neighborhood || '');
    setStreetName(residence?.streetName || '');
    setNumber(residence?.number || '');
    setType(residence?.type || '');
  };

  function handleSubmit() {
    setConfirmSubmit(false);

    const data = residence || {};
    const form = formRef.current;
    for (const i of form) {
      switch (i.type) {
        case 'radio':
          if (i.checked) data[i.name] = i.value;
          break;
        default:
          data[i.id] = i.value.trim();
          break;
      }
    }

    const dataSubmit = {
      data,
      init,
      clientsSelected,
      setClientsSelected,
      clientsPrevious,
    };

    residence
      ? dispatch(actions.updateResidence(dataSubmit))
      : dispatch(actions.createResidence(dataSubmit));
  }

  function handleSearch(e) {
    const { value } = e.target;

    setClientsFiltered(
      clients.filter(
        (item) =>
          item[[Object.keys(filterSearch)]].includes(value) &&
          (residence ? !item.residence_id : true)
      )
    );
  }

  const handleSetClientsSelected = useCallback(() => {
    // console.log(residence.Clients);
    setClientsSelected(residence.Clients);
  }, [residence?.Clients, setClientsSelected]);

  function handleReset(e) {
    e.preventDefault();
    init();
  }

  useEffect(() => {
    console.log('effect residence');

    init();
    if (residence) {
      // setClientsSelected(residence.Clients);
      handleSetClientsSelected();
      setClientsFiltered(clients.filter((e) => !e.residence_id));
    }
    setClientsFiltered(clients);
  }, [clients, setClientsFiltered, residence, handleSetClientsSelected]);

  return (
    <>
      <ConfirmDialog
        confirm={handleSubmit}
        cancel={() => setConfirmSubmit(false)}
        visible={confirmSubmit}
        title={residence ? 'deseja salvar os dados?' : 'deseja cadastrar?'}
      />
      <Container>
        <h1> {residence ? 'Editar Residencia' : 'Cadastro Residencial'}</h1>

        <Form ref={formRef} onSubmit={openDialogSubmit} onReset={handleReset}>
          <div className="titleSection">Identificação</div>
          <div className="identification">
            <label htmlFor="neighborhood">
              Bairro
              <input
                type="text"
                size={30}
                name="neighborhood"
                id="neighborhood"
                value={neighborhood}
                onChange={(e) => {
                  setNeighborhood(e.target.value);
                }}
              />
            </label>

            <label htmlFor="streetName">
              Rua
              <input
                maxLength={70}
                size={30}
                type="text"
                name="streetName"
                id="streetName"
                className="streetName"
                value={streetName}
                onChange={(e) => {
                  setStreetName(e.target.value);
                }}
              />
            </label>

            <label htmlFor="number">
              Nº
              <input
                type="text"
                size={17}
                name="number"
                id="number"
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
            </label>

            <label htmlFor="type">
              Tipo de imóvel
              <select name="type" id="type">
                {typeList.map((e) => (
                  <option key={e} defaultValue={e === { type }}>
                    {e}
                  </option>
                ))}
              </select>
            </label>

            <div className="radioArea">
              <span>Situação de moradia/Posse de terra</span>
              <label htmlFor="proprio">
                <input
                  type="radio"
                  name="situation"
                  id="proprio"
                  value="proprio"
                />
                Próprio
              </label>
              <label htmlFor="financiado">
                <input
                  type="radio"
                  name="situation"
                  id="financiado"
                  value="financiado"
                />
                Financiado
              </label>
              <label htmlFor="alugado">
                <input
                  type="radio"
                  name="situation"
                  id="alugado"
                  value="alugado"
                />
                Alugado
              </label>
              <label htmlFor="arrendado">
                <input
                  type="radio"
                  name="situation"
                  id="arrendado"
                  value="arrendado"
                />
                Arrendado
              </label>
              <label htmlFor="cedido">
                <input
                  type="radio"
                  name="situation"
                  id="cedido"
                  value="cedido"
                />
                Cedido
              </label>
              <label htmlFor="ocupacao">
                <input
                  type="radio"
                  name="situation"
                  id="ocupacao"
                  value="ocupacao"
                />
                Ocupacao
              </label>
              <label htmlFor="outra">
                <input type="radio" name="situation" id="outra" value="outra" />
                Outra
              </label>
            </div>
          </div>

          <div className="titleSection">Moradores</div>
          <SectionForm>
            {clientsSelected.length <= 0 ? (
              <span className="information">
                Ainda não há moradores adicionados
              </span>
            ) : (
              <List
                // pageList={false}
                // add={false}
                data={clientsSelected}
                headerData={{
                  updated_at: 'data',
                  name: 'nome do cidadão',
                  cns: 'cns',
                  birthDate: 'data de nascimento',
                }}
                // handlers={cancelAddClient}

                callbackIcons={callbackCancelAddIcon}
              />
            )}
          </SectionForm>

          <div className="titleSection">Adicionar moradores cadastrados</div>
          <SectionForm>
            <SearchArea>
              <span className="title">buscar cidadão</span>
              <InputSearch
                innerRef={inputRef}
                width="300px"
                placeholder={[Object.values(filterSearch)]}
                onChange={handleSearch}
              />
              <Filter
                onChange={handleSelectFilter}
                data={{
                  name: 'nome',
                  cns: 'cns',
                  birthDate: 'data de nascimento',
                }}
              />
            </SearchArea>
            <List
              pageList={false}
              add
              data={clientsFiltered.slice(0, 3)}
              headerData={{
                updated_at: 'data',
                name: 'nome do cidadão',
                cns: 'cns',
                birthDate: 'data de nascimento',
              }}
              // detailsData={{
              //   gender: 'Sexo',
              //   race: 'raça',
              //   mothersName: 'nome da mãe',
              //   fathersName: 'nome do pai',
              //   cityBirth: 'cidade de nascimento',
              //   stateBirth: 'estado de nascimento',
              //   phone: 'telefone',
              //   scholarity: 'escolaridade',
              //   situationLabor: 'situação no mercado de trabalho',
              // }}
              callbackIcons={callbackAddClientIcon}
            />
          </SectionForm>
          <button type="submit">{residence ? 'Salvar' : 'Cadastrar'} </button>
          <button id="btnReset" type="reset">
            cancelar
          </button>
        </Form>
      </Container>
    </>
  );
}

export default Register;
