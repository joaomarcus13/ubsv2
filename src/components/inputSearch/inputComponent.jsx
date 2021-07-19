/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Container, Input } from './inputStyle';

function InputSearch({ width, innerRef, ...rest }) {
  return (
    <Container>
      <div>
        <FaSearch />
      </div>

      <Input type="search" width={width} ref={innerRef} {...rest} />
    </Container>
  );
}

InputSearch.defaultProps = {
  innerRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};
InputSearch.propTypes = {
  width: PropTypes.string.isRequired,
  innerRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default InputSearch;
