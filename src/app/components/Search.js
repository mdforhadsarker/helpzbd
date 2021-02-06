/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View
       >
        <Text>Menu</Text>
        <TextInput style={styles.searchInput} placeholder="Search Product" />
        <Text>Profile</Text>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
  },
  searchInput: {
    width: '100%',
    height: '100%',
    paddingLeft: 8,
    fontSize: 16,
  },
});
