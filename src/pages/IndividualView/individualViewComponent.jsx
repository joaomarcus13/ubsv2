/* eslint-disable react/prop-types */
/* eslint-disable react/no-this-in-sfc */
import React, { useEffect, useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { Container, Form } from '../../styles/global';
import { View, ViewDiseases, ComponentContainer } from './indivudualViewStyle';
import api from '../../services/api';
import { convertDate } from '../../util/dateFunctions';

function IndividualView(props) {
  const { location } = props;
  const [client, setClient] = useState(null);

  // const diseases = location.state.Diseases
  //   ? location.state.Diseases.map((e) => e.name)
  //   : [];
  const gender = { M: 'Masculino', F: 'Feminino' };

  const getClient = async () => {
    const resp = await api.get(`/client/${location.state}`);
    console.log(resp);
    resp.data.birthDate = convertDate(resp.data.birthDate);
    setClient(resp.data);
  };

  useEffect(() => {
    getClient();
  }, []);

  return (
    <Container>
      <h1>Ficha Individual</h1>
      <ComponentContainer>
        <View>
          <div className="container">
            <div className={client ? 'item' : 'loading'}>
              <span>Cns:</span>
              <span id="cns">{client?.cns}</span>
            </div>
            <div className={client ? 'item' : 'loading'}>
              <span>Nome:</span>
              <span id="name" className="large">
                {client?.name}
              </span>
            </div>
            <div className={client ? 'item' : 'loading'}>
              <span>Data de nascimento</span>
              <span id="birthDate">{client?.birthDate}</span>
            </div>
            <div className={client ? 'item' : 'loading'}>
              <span>Nome da mãe</span>
              <span className="large">{client?.mothersName}</span>
            </div>
            <div className={client ? 'item' : 'loading'}>
              <span>Sexo</span>
              <span>{gender[client?.gender]}</span>
            </div>

            <div className={client ? 'item' : 'loading'}>
              <span>Raca</span>
              <span>{client?.race}</span>
            </div>

            <div className={client ? 'item' : 'loading'}>
              <span> Nome do pai</span>
              <span id="fathersName" className="large">
                {client?.fathersName}
              </span>
            </div>

            <div className={client ? 'item' : 'loading'}>
              <span> estado de nascimento</span>
              <span>{client?.stateBirth}</span>
            </div>
            <div className={client ? 'item' : 'loading'}>
              <span>municipio de nascimento</span>
              <span id="cityBirth">{client?.cityBirth}</span>
            </div>

            <div className={client ? 'item' : 'loading'}>
              <span>Telefone</span>
              <span id="phone">{client?.phone}</span>
            </div>
            <div className={client ? 'item' : 'loading'}>
              <span>escolaridade</span>

              <span>{client?.scholarity}</span>
            </div>
            <div className={client ? 'item' : 'loading'}>
              <span>situaçao no mercado de trabalho</span>
              <span className="large">{client?.situationLabor}</span>
            </div>
          </div>
        </View>
        <ViewDiseases className="diseases">
          <span>Doencas</span>
          {client?.Diseases?.map((e) => (
            <div>{e.name}</div>
          ))}
        </ViewDiseases>
      </ComponentContainer>
    </Container>
  );
}

export default IndividualView;
