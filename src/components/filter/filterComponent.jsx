/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import PropTypes from 'prop-types';
import { Filter } from './filterStyle';
import filter from '../../assets/icons/funnel.svg';

function FilterComponent({ onChange, data }) {
  return (
    <Filter>
      <span>
        <img src={filter} alt="" />
      </span>
      <select name="search" id="selectSearch" onChange={onChange}>
        {Object.entries(data).map((item) => (
          <option key={item[1]} value={item[1]} id={item[0]}>
            {item[1]}
          </option>
        ))}
      </select>
      <span>Filtro</span>
    </Filter>
  );
}

FilterComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default FilterComponent;
