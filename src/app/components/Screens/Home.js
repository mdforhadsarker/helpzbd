/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StatusBar} from 'react-native';

const Home = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <StatusBar backgroundColor="#44A72C" barStyle="light-content" />
      <Text style={{fontFamily: 'UniNeueRegular-Italic'}}>Home Screen</Text>
      <Text style={{fontSize: 50}}>Working On it......</Text>
    </View>
  );
};

export default Home;
