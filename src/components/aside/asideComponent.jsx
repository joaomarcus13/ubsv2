/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Aside, DrawerAside, List } from './asideStyle';
import house from '../../assets/icons/house.svg';
import addUser from '../../assets/icons/add-user.svg';
import listUser from '../../assets/icons/skills.svg';
import listHouse from '../../assets/icons/list.svg';

function AsideComponent(props) {
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <>
      <Aside
        onMouseEnter={() => setDrawerVisible(true)}
        onMouseLeave={() => setDrawerVisible(false)}
      >
        <List>
          <Link to="/list-client">
            <img src={listUser} alt="adicionar cliente" />
          </Link>
        </List>

        <List>
          <Link to="/register-client">
            <img src={addUser} alt="adicionar cliente" />
          </Link>
        </List>

        <List>
          <Link to="/list-residence">
            <img src={listHouse} alt="lista residencia" />
          </Link>
        </List>

        <List>
          <Link to="/register-residence">
            <img src={house} alt="adicionar residencia" />
          </Link>
        </List>

        <List>
          <img src={house} alt="adicionar residencia" />
        </List>
      </Aside>
      <DrawerAside
        drawerVisible={drawerVisible}
        onMouseEnter={() => setDrawerVisible(true)}
        onMouseLeave={() => setDrawerVisible(false)}
      >
        <List>
          <Link to="/list-client">
            <span>Listagem individual</span>
          </Link>
        </List>

        <List>
          <Link to="/register-client">
            <span>Cadastro Individual</span>
          </Link>
        </List>

        <List>
          <Link to="/list-residence">
            <span>Listagem Residencia</span>
          </Link>
        </List>

        <List>
          <Link to="/register-residence">
            <span>Cadastro Residencial</span>
          </Link>
        </List>

        <List>
          <Link to="/register-residence">
            <span>Next Feature</span>
          </Link>
        </List>
      </DrawerAside>
    </>
  );
}

export default AsideComponent;
