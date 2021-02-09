/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity, TextInput, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {DrawerActions} from '@react-navigation/native';

// import Header from '../components/Header/Header';
import Home from '../components/Screens/Home';
import Categoris from '../components/Screens/Categories';
import Search from '../components/Screens/Search';
import MyList from '../components/Screens/MyList';
import Cart from '../components/Screens/Cart';
// import SearchBar from '../components/Search';
//icon
import Menu from '../assets/menu.svg';
import Profile from '../assets/profile.svg';
import HomeIcon from '../assets/home.svg';
import CategorisIcon from '../assets/categoris.svg';
import SearchIcon from '../assets/searchicon.svg';
import MyListIcon from '../assets/mylist.svg';
import CartIcon from '../assets/carticon.svg';
import CartHeaderIcon from '../assets/cart.svg';
import Logo from '../assets/logo.svg';
import Taka from '../assets/tk.svg';

const HomeStack = createStackNavigator();

function LogoTitle() {
  return (
    <View>
      <Logo width={42} height={18} />
    </View>
  );
}

// function MenuIcon({}) {
//   return (
//     <TouchableOpacity>
//       <Menu />
//     </TouchableOpacity>
//   );
// }

function ProfileIcon() {
  return (
    <TouchableOpacity>
      <Profile onPress={() => alert('Profile Clicked')} />
    </TouchableOpacity>
  );
}

// function HeaderBar() {
//   return (
//     <View>
//       <Header />
//     </View>
//   );
// }

// const [value, onChangeText] = React.useState('Useless Placeholder');
function HomeStackScreen({navigation}) {
  const [value, onChangeText] = React.useState();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          // headerLeft: () => (
          //   <Menu left={20} top={10} onPress={() => navigation.openDrawer()} />
          // ),
          // headerRight: (props) => <ProfileIcon {...props} />,
          // headerStyle: {
          //   backgroundColor: '#44A72C',
          // },

          // headerTitle: (props) => <LogoTitle {...props} />,
          header: () => (
            <View
              style={{
                backgroundColor: '#44A72C',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginLeft: 20,
                  marginRight: 20,
                  // backgroundColor: 'red',
                }}>
                <View>
                  <LogoTitle />
                </View>
                <View style={{left: 150}}>
                  <ProfileIcon />
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginLeft: 20,
                  marginRight: 20,
                }}>
                <Menu onPress={() => navigation.openDrawer()} />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: 10,
                  }}>
                  <TextInput
                    onChangeText={(text) => onChangeText(text)}
                    value={value}
                    underlineColorAndroid="transparent"
                    placeholder="Search Product"
                    placeholderTextColor="#707070"
                    autoCapitalize="none"
                    style={{
                      paddingTop: 10,
                      paddingRight: 10,
                      paddingBottom: 10,
                      paddingLeft: 0,
                      backgroundColor: '#fff',
                      color: '#424242',
                      height: 30,
                      fontSize: 10,
                      width: '75%',
                    }}
                  />
                  <TouchableOpacity
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 4,
                      backgroundColor: '#f1f1f1',
                      paddingRight: 10,
                      paddingLeft: 10,
                    }}>
                    <SearchIcon />
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <CartHeaderIcon />
                  <View style={{padding: 5}}>
                    <Taka />
                  </View>

                  <Text style={{color: 'white'}}>0.00</Text>
                </View>
              </View>
            </View>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}

const CategorisStack = createStackNavigator();

function CategorisStackScreen({navigation}) {
  return (
    <CategorisStack.Navigator>
      <CategorisStack.Screen
        name="Categoris"
        component={Categoris}
        options={{
          headerLeft: () => (
            <Menu left={20} top={10} onPress={() => navigation.openDrawer()} />
          ),
          headerRight: (props) => <ProfileIcon {...props} />,

          headerStyle: {
            backgroundColor: '#44A72C',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: (props) => <LogoTitle {...props} />,
          // header: (props) => <HeaderBar {...props} />,
        }}
      />
    </CategorisStack.Navigator>
  );
}

const SearchStack = createStackNavigator();

function SearchStackScreen({navigation}) {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Search"
        component={Search}
        options={{
          headerLeft: () => (
            <Menu left={20} top={10} onPress={() => navigation.openDrawer()} />
          ),
          headerRight: (props) => <ProfileIcon {...props} />,

          headerStyle: {
            backgroundColor: '#44A72C',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: (props) => <LogoTitle {...props} />,
          // header: (props) => <HeaderBar {...props} />,
        }}
      />
    </SearchStack.Navigator>
  );
}

const MyListStack = createStackNavigator();

function MyListStackScreen({navigation}) {
  return (
    <MyListStack.Navigator>
      <MyListStack.Screen
        name="MyList"
        component={MyList}
        options={{
          headerLeft: () => (
            <Menu left={20} top={10} onPress={() => navigation.openDrawer()} />
          ),
          headerRight: (props) => <ProfileIcon {...props} />,

          headerStyle: {
            backgroundColor: '#44A72C',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: (props) => <LogoTitle {...props} />,
          // header: (props) => <HeaderBar {...props} />,
        }}
      />
    </MyListStack.Navigator>
  );
}

const CartStack = createStackNavigator();

function CartStackScreen({navigation}) {
  return (
    <CartStack.Navigator>
      <CartStack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerLeft: () => (
            <Menu left={20} top={10} onPress={() => navigation.openDrawer()} />
          ),
          headerRight: (props) => <ProfileIcon {...props} />,

          headerStyle: {
            backgroundColor: '#44A72C',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: (props) => <LogoTitle {...props} />,
          // header: (props) => <HeaderBar {...props} />,
        }}
      />
    </CartStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#44A72C',
        inactiveTintColor: '#000000',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({size, focused, color}) => {
            return (
              <TouchableOpacity>
                <View>
                  <HomeIcon />
                </View>
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tab.Screen
        name="Categoris"
        component={CategorisStackScreen}
        options={{
          title: 'Categoris',
          tabBarIcon: ({size, focused, color}) => {
            return (
              <TouchableOpacity>
                <View>
                  <CategorisIcon />
                </View>
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({size, focused, color}) => {
            return (
              <TouchableOpacity style={{}}>
                <SearchIcon onPress={() => alert('Clicked Search')} />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tab.Screen
        name="MyList"
        component={MyListStackScreen}
        options={{
          title: 'MyList',
          tabBarIcon: ({size, focused, color}) => {
            return (
              <TouchableOpacity>
                <MyListIcon />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStackScreen}
        options={{
          title: 'Cart',
          tabBarIcon: ({size, focused, color}) => {
            return (
              <TouchableOpacity>
                <CartIcon />
              </TouchableOpacity>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
