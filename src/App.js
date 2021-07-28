import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import "./assets/styles/global.scss";
import { Home } from "./pages/Home";
import { LoginClient } from "./client/login/Login";
import { CreateAccountClient } from "./client/create-account/CreateAccount";
import { CreateAccountRestaurant } from "./restaurant/create-account/CreateAccount";
import { CadastroConcluido } from "./pages/CadastroConcluido";
import { LoginRestaurant } from "./restaurant/login/Login";
import { HomeClient } from "./client/home/Home";
import { HomeRestaurant } from "./restaurant/home/Home";
import { ProfileRestaurant } from "./restaurant/home/profileRestaurant/ProfileRestaurant";

const NotFound = () => <Redirect to="/" />;

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginClient} />
        <Route exact path="/create-account" component={CreateAccountClient} />
        <Route
          exact
          path="/restaurant-create-account"
          component={CreateAccountRestaurant}
        />
        <Route exact path="/create-successful" component={CadastroConcluido} />
        <Route exact path="/restaurant-login" component={LoginRestaurant} />
        <Route exact path="/home-login" component={HomeClient} />
        <Route path="/home-restaurant" component={HomeRestaurant} />
        <Route
          path="/home-restaurant/profile"
          exact
          component={ProfileRestaurant}
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
