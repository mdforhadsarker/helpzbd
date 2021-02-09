/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import Slider from '../Slider';
import Category from '../Category';

// const DATA = [
//   {
//     id: '1',
//     image: require('../../assets/images/banner-big.jpg'),
//   },
//   // {
//   //   id: '2',
//   //   image: require('../../assets/images/banner-small.png'),
//   // },
//   // {
//   //   id: '3',
//   //   image: require('../../assets/images/banner-small2.png'),
//   // },
// ];

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor="#44A72C" barStyle="light-content" />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={styles.bigBanner}
            source={require('../../assets/images/banner-big.jpg')}
          />
        </View>

        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            paddingTop: 10,
          }}>
          <Image
            style={styles.smallBanner}
            source={require('../../assets/images/banner-small.png')}
          />
          <Image
            style={styles.smallBanner2}
            source={require('../../assets/images/banner-small2.png')}
          />
        </View>
        <Slider />
        <Category />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  bigBanner: {
    width: '100%',
    height: 113,
    resizeMode: 'stretch',
  },
  smallBanner: {
    width: 200,
    height: 113,
    resizeMode: 'stretch',
  },
  smallBanner2: {
    width: 200,
    height: 113,
    resizeMode: 'stretch',
    marginLeft: 10,
  },
});
