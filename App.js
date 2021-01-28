/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import Header from './src/app/components/Header';

const App = () => {
  return (
    <View style={{backgroundColor: '#44A72C', width: '100%', height: 86}}>
      <Header />
    </View>
  );
};

export default App;
