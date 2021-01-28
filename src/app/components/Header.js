/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import MyLogo from '../assets/logo.svg';

const Header = () => {
  return (
    <View>
      <MyLogo width={48} height={48} />
      <Text>Helpz</Text>
    </View>
  );
};

export default Header;
