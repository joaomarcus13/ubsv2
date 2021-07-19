/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable array-callback-return */
/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { FaSearch, FaTrashAlt, FaEdit } from 'react-icons/fa';
import Filter from '../../components/filter/filterComponent';
import InputSearch from '../../components/inputSearch/inputComponent';
import List from '../../components/list/listComponent';
import useFilterSearch from '../../hooks/useFilterSearch';
import history from '../../services/homeHistory';
import { Container } from '../../styles/global';
import { ContainerComponent, SearchArea } from './listStyle';
import ConfirmDialog from '../../components/confirmDialog/confirmDialogComponent';
import useConfirmPopUp from '../../hooks/useConfirmPopUp';
import actions from '../../store/modules/application/actions';

function Register() {
  const residences = useSelector((state) => state.application.residences);
  const [residenceFiltered, setResidencesFiltered] = useState([]);
  const [residenceSelected, setResidenceSelected] = useState(null);
  const [confirmPopUp, setConfirmPopUp] = useConfirmPopUp(false);
  const dispatch = useDispatch();

  const {
    handleSelectFilter,
    filterSearch,
    setfilterSearch,
    inputRef,
  } = useFilterSearch({ streetName: 'rua' });

  function callbackActionIcons(item) {
    return (
      <>
        <div
          onClick={() => {
            history.push('/residence-view', item);
          }}
        >
          <FaSearch />
        </div>
        <div
          onClick={() => {
            // handleEdit(item);
            history.push('/register-residence', item);
          }}
        >
          <FaEdit size={16} />
        </div>
        <div
          onClick={() => {
            // handleDelete(item);
            setResidenceSelected(item);
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
    dispatch(actions.deleteResidence(residenceSelected));
  }

  function handleSearch(e) {
    const { value } = e.target;
    setResidencesFiltered(
      residences.filter((item) =>
        item[[Object.keys(filterSearch)]].includes(value)
      )
    );
  }

  useEffect(() => {
    setResidencesFiltered(residences);
  }, [residences, setResidencesFiltered]);

  return (
    <>
      <ConfirmDialog
        title="deseja excluir a residencia?"
        visible={confirmPopUp}
        confirm={confirmDelete}
        cancel={() => {
          setConfirmPopUp(false);
          setResidenceSelected(null);
        }}
      />
      <Container>
        <h1>Residencias Cadastradas</h1>
        <ContainerComponent>
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
                streetName: 'rua',
                number: 'numero',
                neighborhood: 'bairro',
              }}
            />

            <div className="advancedSearch">pesquisa avancada</div>
          </SearchArea>
          <List
            data={residenceFiltered}
            headerData={{
              updated_at: 'data',
              streetName: 'rua',
              number: 'numero',
              neighborhood: 'bairro',
            }}
            callbackIcons={callbackActionIcons}
            detailsData={{
              streetName: 'Rua',
              number: 'Numero',
              neighborhood: 'Bairro',
              type: 'Tipo de imóvel',
              situation: 'Situação da Moradia',
            }}
          />
        </ContainerComponent>
      </Container>
    </>
  );
}

export default Register;
