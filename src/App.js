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
import {ProfileAdressRestaurant} from "./restaurant/home/profileRestaurant/adress/ProfileAdressRestaurant";
import {MenuRestaurant} from "./restaurant/Menu/MenuRestaurant";
import {OrderedTable} from "./restaurant/home/manager/ordered/OrderedTable";

const NotFound = () => <Redirect to="/" />;

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
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
        <Route exact path="/home-restaurant" component={HomeRestaurant} />
        <Route
          path="/home-restaurant/profile/picture"
          exact
          component={ProfilePictureRestaurant}
        />
        <Route
          path="/home-restaurant/profile/adress"
          exact
          component={ProfileAdressRestaurant}
        />
        <Route path="/home-restaurant/menu" exact component={MenuRestaurant} />

        <Route
          path="/home-restaurant/manager/orders"
          component={OrderedTable}
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
