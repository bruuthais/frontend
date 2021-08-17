import React from "react";
import {Route, BrowserRouter, Switch, Redirect} from "react-router-dom";
import "./assets/styles/global.scss";
import {Home} from "./pages/Home";
import {LoginClient} from "./client/login/Login";
import {CreateAccountClient} from "./client/create-account/CreateAccount";
import {CreateAccountRestaurant} from "./restaurant/create-account/CreateAccount";
import {CadastroConcluido} from "./pages/CadastroConcluido";
import LoginRestaurant from "./restaurant/login/Login";
import AuthHOC from "./services/AuthHOC";
import {HomeClient} from "./client/home/Home";
import {HomeRestaurant} from "./restaurant/home/Home";
import {ProfilePictureRestaurant} from "./restaurant/home/profileRestaurant/picture/ProfilePictureRestaurant";
import {ProfileAddressRestaurant} from "./restaurant/home/profileRestaurant/address/ProfileAddressRestaurant";
import {MenuRestaurant} from "./restaurant/home/Menu/MenuRestaurant";

import {Ordered} from "./restaurant/home/manager/Ordered";
import {ProfileMeRestaurant} from "./restaurant/home/profileRestaurant/me/ProfileMeRestaurant";
import {Profile} from "./client/home/profile/me/Profile";
import {ProfileAddress} from "./client/home/profile/address/ProfileAddress";
import {RestaurantClientPag} from "./client/home/restaurants/RestaurantClientPag";

const NotFound = () => <Redirect to="/" />;

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Rotas comuns sem login */}
        <Route path="/" exact component={Home} />
        <Route exact path="/login" component={LoginClient} />
        <Route exact path="/create-account" component={CreateAccountClient} />
        <Route exact path="/restaurant-login" component={LoginRestaurant} />
        <Route
          exact
          path="/restaurant-create-account"
          component={CreateAccountRestaurant}
        />
        <Route exact path="/create-successful" component={CadastroConcluido} />

        {/* Parte do cliente/usuário que irá fazer compras */}

        <AuthHOC exact path="/home" component={HomeClient} />
        <AuthHOC exact path="/home/profile" component={Profile} />
        <AuthHOC
          exact
          path="/home/profile/address"
          component={ProfileAddress}
        />

        <AuthHOC
          exact
          path="/home/restaurant"
          component={RestaurantClientPag}
        />
        {/* Parte do restaurante */}
        <AuthHOC exact path="/home-restaurant" component={HomeRestaurant} />
        <AuthHOC
          exact
          path="/home-restaurant/profile/me"
          component={ProfileMeRestaurant}
        />
        <AuthHOC
          exact
          path="/home-restaurant/profile/picture"
          component={ProfilePictureRestaurant}
        />
        <AuthHOC
          exact
          path="/home-restaurant/profile/address"
          component={ProfileAddressRestaurant}
        />
        <AuthHOC
          exact
          path="/home-restaurant/menu"
          component={MenuRestaurant}
        />

        <AuthHOC
          exact
          path="/home-restaurant/manager/orders"
          component={Ordered}
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
