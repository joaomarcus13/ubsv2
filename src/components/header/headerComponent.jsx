/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Header, DropDown } from './headerStyle';
import icon from '../../assets/images/esus_white.28764475.svg';

function HeaderComponent({ name, logout }) {
  const [dropDownVisible, setDropDownVisible] = useState(false);
  // const [arrow, setArrow] = useState(true);
  const arrowRef = useRef(null);

  function handleDropDown() {
    setDropDownVisible(!dropDownVisible);
    // setArrow(!arrow);
    arrowRef.current.classList.toggle('spin');
    // console.dir(arrowRef);
  }

  return (
    <>
      <Header>
        <img src={icon} alt="" />
        <div onClick={handleDropDown}>
          <span>{name} marcos barbosa</span>
          <span ref={arrowRef}>
            <FaAngleDown />
          </span>
        </div>
      </Header>
      <DropDown visible={dropDownVisible}>
        <li>
          <a href="/register"> Editar usuario</a>
        </li>
        <li>Sobre</li>
        <li>
          <Link to="/login" onClick={logout}>
            Sair
          </Link>
        </li>
      </DropDown>
    </>
  );
}

HeaderComponent.propTypes = {
  name: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

export default HeaderComponent;
