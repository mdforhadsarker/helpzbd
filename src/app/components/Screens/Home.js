/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    image: require('../../assets/images/banner-big.jpg'),
  },
];

const Item = ({image}) => (
  <View>
    {/* <StatusBar backgroundColor="#44A72C" barStyle="light-content" /> */}
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image style={styles.bigBanner} source={image} />
    </View>

    <View
      style={{
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingTop: 10,
      }}>
      <Image style={styles.smallBanner} source={image} />
      <Image style={styles.smallBanner2} source={image} />
    </View>
  </View>
);

const Home = () => {
  const renderItem = ({item}) => <Item image={item.image} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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
    width: 190,
    height: 113,
    resizeMode: 'stretch',
    marginLeft: 10,
  },
});
