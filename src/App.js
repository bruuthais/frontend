import React from "react";
import {Route, BrowserRouter, Switch, Redirect} from "react-router-dom";
import "./assets/styles/global.scss";
import {Home} from "./pages/Home";
import {LoginClient} from "./client/login/Login";
import {CreateAccountClient} from "./client/create-account/CreateAccount";
import {CreateAccountRestaurant} from "./restaurant/create-account/CreateAccount";
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
import {HomeCategory} from "./client/home/category/HomeCategory";
import {Bag} from "./utils/bag/Bag";
import {Orders} from "./client/home/profile/orders/Orders";
import {ClickOrders} from "./client/home/profile/orders/ClickOrders";

const NotFound = () => <Redirect to="/" />;

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Rotas comuns sem login */}
        <Route path="/" exact component={Home} /> {/* HOME */}
        <Route exact path="/login" component={LoginClient} /> {/* LOGIN */}
        {/* LOGIN DO RESTAURANTE */}
        <Route exact path="/restaurant-login" component={LoginRestaurant} />
        {/* CRIAR CONTA */}
        <Route exact path="/create-account" component={CreateAccountClient} />
        {/* CRIAR CONTA RESTAURANTE */}
        <Route
          exact
          path="/restaurant-create-account"
          component={CreateAccountRestaurant}
        />
        {/* Parte do cliente/usuário que irá fazer compras */}
        {/* HOME */}
        <AuthHOC exact path="/home" component={HomeClient} />
        {/* PARTE DO MENU DE PERFIL: PERFIL */}
        <AuthHOC exact path="/home/profile" component={Profile} />
        {/* PARTE DO MENU DE PERFIL: ENDEREÇO */}
        <AuthHOC
          exact
          path="/home/profile/address"
          component={ProfileAddress}
        />
        {/* PARTE DO MENU DE PERFIL: PEDIDOS */}
        <AuthHOC exact path="/home/profile/orders" component={Orders} />
        {/* PARTE QUE RETORNA PEDIDO */}
        <AuthHOC exact path="/orders/:id" component={ClickOrders} />
        {/* PAGINA DO RESTAURANTE */}
        <AuthHOC
          exact
          path="/home/restaurant/:id"
          component={RestaurantClientPag}
        />
        {/* PÁGINA DA BUSCA DE CATEGORIAS */}
        <AuthHOC exact path="/home/category/:name" component={HomeCategory} />
        {/* SACOLA/CARRINHOS DE COMPRAS */}
        <AuthHOC exact path="/bag" component={Bag} />
        {/* Parte do restaurante */}
        {/* HOME */}
        <AuthHOC exact path="/home-restaurant" component={HomeRestaurant} />
        {/* PARTE DO PERFIL: PERFIL */}
        <AuthHOC
          exact
          path="/home-restaurant/profile/me"
          component={ProfileMeRestaurant}
        />
        {/* PARTE DO PERFIL: IMAGENS */}
        <AuthHOC
          exact
          path="/home-restaurant/profile/picture"
          component={ProfilePictureRestaurant}
        />
        {/* PARTE DO PERFIL: ENDEREÇO */}
        <AuthHOC
          exact
          path="/home-restaurant/profile/address"
          component={ProfileAddressRestaurant}
        />
        {/* PARTE DO CARDÁPIO */}
        <AuthHOC
          exact
          path="/home-restaurant/menu"
          component={MenuRestaurant}
        />
        {/* PARTE DE ADMINISTRAÇÃO DOS PEDIDOS */}
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
