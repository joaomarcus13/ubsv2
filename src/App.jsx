import React, { useEffect } from 'react';
import { Router } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { Slide, ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import GlobalStyles from './styles/global';
import Routes from './routes';
import store, { persistor } from './store';
import history from './services/history';
import actions from './store/modules/application/actions';
import homeHist from './services/homeHistory';

function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // function seen() {
  //   homeHist.listen((location) => {
  //     if (homeHist.action === 'PUSH') {
  //       console.log('push', location);
  //     }
  //     if (homeHist.action === 'POP') {
  //       console.log('back', location);
  //     }
  //   });
  // }

  useEffect(() => {
    // seen();
    // console.log('useEffect App');
    if (isLoggedIn) {
      dispatch(actions.loadClients());
      dispatch(actions.loadResidences());
    }
  }, [dispatch, isLoggedIn]);
  return (
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <GlobalStyles />
        <Routes />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar
          transition={Slide}
          closeOnClick
        />
      </Router>
    </PersistGate>
  );
}

export default AppWrapper;
