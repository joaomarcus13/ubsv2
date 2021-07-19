/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import { Container, Form } from '../../styles/global';
import { View, ViewResident, ComponentContainer } from './residenceViewStyle';
import Listing from '../../components/list/listComponent';
import history from '../../services/homeHistory';

function IndividualView(props) {
  const { location } = props;
  console.log(props);

  function callBackViewClient(item) {
    return (
      <div
        onClick={() => {
          history.push('/individual-view', item);
        }}
      >
        <FaSearch />
      </div>
    );
  }

  return (
    <Container>
      <h1>Informaçoes da Residencia</h1>
      <ComponentContainer>
        <View>
          <div className="container">
            {/* <div className="identification"> */}
            <div>
              <span>Rua:</span>
              <span id="streetName">{location.state.streetName}</span>
            </div>
            <div>
              <span>Numero:</span>
              <span id="number">{location.state.number}</span>
            </div>
            <div>
              <span>Bairro:</span>
              <span id="neighborhood">{location.state.neighborhood}</span>
            </div>
            <div>
              <span>Tipo de domicilio</span>
              <span>{location.state.type}</span>
            </div>
            <div>
              <span>Situação do domicilio</span>
              <span className="inputname">{location.state.situation}</span>
            </div>
            {/* </div> */}
          </div>
        </View>
        <ViewResident>
          <span className="title">Moradores</span>
          <div className="list">
            {location.state.Clients.length > 0 ? (
              <Listing
                data={location.state.Clients}
                headerData={{
                  updated_at: 'data',
                  name: 'nome do cidadão',
                  cns: 'cns',
                  birthDate: 'data de nascimento',
                }}
                callbackIcons={callBackViewClient}
              />
            ) : (
              <div className="information">
                Não há moradores cadastrados nesta residència
              </div>
            )}
          </div>
        </ViewResident>
      </ComponentContainer>
    </Container>
  );
}

export default IndividualView;
