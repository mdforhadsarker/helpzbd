/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
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
// import HomeIcon from '../assets/home.svg';
// import CategorisIcon from '../assets/categoris.svg';
// import SearchIcon from '../assets/search.svg';
// import MyListIcon from '../assets/mylist.svg';
// import CartIcon from '../assets/cart.svg';
import Logo from '../assets/logo.svg';

const HomeStack = createStackNavigator();

function LogoTitle() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Logo width={42} height={18} />
    </View>
  );
}

// function MenuIcon({}) {
//   return (
//     <TouchableOpacity style={{paddingLeft: 20}}>
//       <Menu />
//     </TouchableOpacity>
//   );
// }

function ProfileIcon() {
  return (
    <TouchableOpacity style={{paddingRight: 20}}>
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
function HomeStackScreen({navigation}) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
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
            height: 80,
          },
          headerTitle: (props) => <LogoTitle {...props} />,
          // header: (props) => <HeaderBar {...props} />,
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
      <Tab.Screen name="Home" component={HomeStackScreen} options={{}} />
      <Tab.Screen name="Categoris" component={CategorisStackScreen} />
      <Tab.Screen name="Search" component={SearchStackScreen} />
      <Tab.Screen name="MyList" component={MyListStackScreen} />
      <Tab.Screen name="Cart" component={CartStackScreen} />
    </Tab.Navigator>
  );
}
