/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../components/Screens/Home';
import Header from '../components/Header/Header';
import CategoriesScreen from '../components/Screens/Categories';

const Stack = createStackNavigator();

const homeStack = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Helpz',
            headerStyle: {
              backgroundColor: '#44A72C',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen name=" Categoris" component={CategoriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default homeStack;
