import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


import { Home } from "./pages/Home";

import { LoginClient } from "./client/login/Login";
import { CreateAccountClient } from "./client/create-account/CreateAccount";
import { HomeClient } from "./client/home/Home";

import { LoginRestaurant } from "./restaurant/login/Login";
import { CreateAccountRestaurant } from "./restaurant/create-account/CreateAccount";

import { CadastroConcluido } from "./pages/CadastroConcluido";

import { HomeRestaurant } from "./restaurant/home/Home";
import { ProfileRestaurant } from "./restaurant/home/profileRestaurant/ProfileRestaurant";


import { Context } from "./context/AuthContext";



export default function Routes() {
  return (
    <Switch>
        <Route exact path="/"  component={Home} />
        <Route exact path="/login" component={LoginClient} />
        <Route exact path="/create-account"  component={CreateAccountClient} />
        <Route exact
          path="/restaurant-create-account"
          
          component={CreateAccountRestaurant}
        />
        <Route exact path="/create-successful" component={CadastroConcluido} />
        <Route exact path="/restaurant-login" component={LoginRestaurant} />
        <Route exact isPrivate path="/home-login" component={HomeClient} />
        <Route isPrivate exact path="/home-restaurant" component={HomeRestaurant} />
        <Route
          path="/home-restaurant/profile"
          exact
          component={ProfileRestaurant}
        />
        
      </Switch>
  );
}