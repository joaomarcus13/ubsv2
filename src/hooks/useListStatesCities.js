import { useState } from 'react';
import statesCities from '../assets/estados_cidades.json';

export default (initialState) => {
  const states = statesCities.map((e) => e.nome);
  const [city, setCity] = useState(initialState);

  function handleSelect(e) {
    const [state] = statesCities.filter((st) => st.nome === e.target.value);
    const cities = state.cidades;
    setCity(cities);
  }

  return { states, city, setCity, handleSelect };
};
