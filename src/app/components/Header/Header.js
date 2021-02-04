/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TextInput, Text} from 'react-native';
import MyLogo from '../../assets/logo.svg';
import Profile from '../../assets/profile.svg';
import Menu from '../../assets/menu.svg';
import Tk from '../../assets/tk.svg';
import Cart from '../../assets/cart.svg';
import Search from '../../assets/search.svg';

const Header = () => {
  const [value, onChangeText] = React.useState('Search Product');
  return (
    <>
      <View style={{flex: 1, justifyContent: 'center', padding: 25, backgroundColor: '#44A72C'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <MyLogo width={42} height={18} />
          </View>

          <View style={{right: 15}}>
            <Profile width={21} height={21} />
          </View>
        </View>
        <View
          style={{
            paddingTop: 5,
            flexDirection: 'row',
            justifyContent: 'space-around',
            // backgroundColor: 'red',
          }}>
          <View style={{justifyContent: 'flex-end', paddingRight: 40}}>
            <Menu width={21} height={21} />
          </View>

          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              flex: 1,
            }}>
            <TextInput
              onChangeText={(text) => onChangeText(text)}
              value={value}
              style={{
                width: '100%',
                height: 'auto',
                borderColor: 'white',
                borderWidth: 1,
                backgroundColor: 'white',
                justifyContent: 'center',
                fontSize: 10,
              }}
            />

            <View
              style={{
                backgroundColor: '#F1F1F1',
                justifyContent: 'center',
                alignItems: 'flex-end',
                right: 20,
                paddingRight: 15,
                paddingLeft: 15,
              }}>
              <Search width={10} height={11} />
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View style={{margin: 2.5}}>
              <Cart width={12} height={11} />
            </View>

            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                // backgroundColor: 'green',
                margin: 2.5,
              }}>
              <View style={{marginRight: 2}}>
                <Tk />
              </View>
              <View style={{}}>
                <Text style={{color: 'white'}}>00.00</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Header;
