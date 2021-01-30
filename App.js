/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import Header from './src/app/components/Header/Header';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from './src/app/components/Screens/Home';

const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <View style={{backgroundColor: '#44A72C', width: '100%', height: 86}}>
        <Header />
      </View>
      <Drawer.Navigator initialRouteName="Drawer">
        <Drawer.Screen name="Notification" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
