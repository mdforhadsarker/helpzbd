/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import CategoryCard from '../Category';

const Categoris = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <CategoryCard />
    </View>
  );
};

export default Categoris;
