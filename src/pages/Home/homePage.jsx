import React from 'react';
import { Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Aside from '../../components/aside/asideComponent';
import Header from '../../components/header/headerComponent';
import HomeRoute from '../../routes/homeRoutes';
import { Container } from './homeStyle';
import history from '../../services/homeHistory';
import hist from '../../services/history';
import actions from '../../store/modules/auth/actions';

function Home() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  function logout(e) {
    e.preventDefault();
    dispatch(actions.loginFailure());
    hist.push('/login');
  }

  return (
    <>
      <Router history={history}>
        <Header name={user.name} logout={logout} />
        <Container>
          <Aside />
          <HomeRoute />
        </Container>
      </Router>
    </>
  );
}

export default Home;
