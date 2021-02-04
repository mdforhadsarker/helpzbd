/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, Button} from 'react-native';

const Home = (navigation) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Categories')}
        title="Categoris"
      />
    </View>
  );
};

export default Home;
