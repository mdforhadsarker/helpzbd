/* eslint-disable prettier/prettier */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import homeNavigator from './HomeStack';

const Drawer = createDrawerNavigator();

export default function drawerNavigation() {
  return (
    <>
   
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={homeNavigator} />
        </Drawer.Navigator>
      
    </>
  );
}
