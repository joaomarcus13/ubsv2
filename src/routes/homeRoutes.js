/* eslint-disable consistent-return */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { useSelector } from 'react-redux';
import RegisterClient from '../pages/RegisterClient/registerPage';
import RegisterResidence from '../pages/RegisterResidence/registerPage';
import ListClient from '../pages/ListClient/listPage';
import ListResidence from '../pages/ListResidence/listPage';
import IndividualView from '../pages/IndividualView/individualViewComponent';
import ResidenceView from '../pages/ResidenceView/residenceViewComponent';
import IndividualEdit from '../pages/IndividualEdit/individualEditComponent';

export default () => (
  <Switch>
    <Route exact path="/list-client" component={ListClient} />
    <Route exact path="/register-client" component={RegisterClient} />
    <Route exact path="/list-residence" component={ListResidence} />
    <Route exact path="/register-residence" component={RegisterResidence} />
    <Route exact path="/individual-view" component={IndividualView} />
    <Route exact path="/individual-edit" component={IndividualEdit} />
    <Route exact path="/residence-view" component={ResidenceView} />
    {/* <Route exact path="/residence-edit" component={ResidenceView} /> */}
    <Redirect from="*" to="/list-client" />
  </Switch>
);
