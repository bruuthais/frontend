import React from "react";
import {NavBarRestaurant} from "../../utils/navbar/restaurant-navbar/NavBarRestaurant";
import {MenuTable} from "./MenuTable";

export function MenuRestaurant() {
  return (
    <>
      <NavBarRestaurant />
      <MenuTable />
    </>
  );
}
