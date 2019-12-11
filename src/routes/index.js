import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Admin from '../pages/Admin';
import Main from '../pages/Main';
import Pet from '../pages/Pet';
import Car from '../pages/Car';

import Error404 from '../pages/Error404';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/signin" component={SignIn} />

        <Route path="/signup" component={SignUp} isPrivate isAdmin />
        <Route path="/admin" component={Admin} isPrivate />
        <Route path="/pet" component={Pet} isPrivate />
        <Route path="/car" component={Car} isPrivate />

        <Route path="*" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}
