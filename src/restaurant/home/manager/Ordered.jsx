import React from 'react';
import { NavBarRestaurant } from '../../../utils/navbar/restaurant-navbar/NavBarRestaurant';
import { Delivering } from './ordered/Delivering';
import { InProgress } from './ordered/InProgress';
import { NewRequests} from './ordered/NewRequests';

export function Ordered(){
      return(
            <>
            <NavBarRestaurant/>
            <NewRequests/>
            <InProgress/>
            <Delivering/>
            </>
      )

}