/* eslint-disable prettier/prettier */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import homeNavigator from './HomeStack';
import {DrawerContent} from '../components/Screens/DrawerContent';

const Drawer = createDrawerNavigator();

export default function drawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={homeNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
