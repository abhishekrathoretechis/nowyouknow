import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {Image} from 'react-native';

import HomeScreen from './Screens/HomeScreen/HomeScreen';
import SearchScreen from './Screens/SearchScreen/SearchScreen';
import MagScreen from './Screens/MagScreen/MagScreen';
import ProfileScreen from './Screens/ProfileScreen/ProfileScreen';
import AddScreen from './Screens/AddScreen/AddScreen';
const Tab = createBottomTabNavigator();

function MyBottomTabNavigator(props) {
  //   const userProfileData = useSelector(state => state?.auth?.curretUser);

  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     const unsubscribe = props.navigation.addListener('focus', () => {
  //       getUserDetails();
  //     });
  //     return unsubscribe;
  //   }, [props.navigation]);

  //   useEffect(() => {
  //     if (
  //       userProfileData == null ||
  //       userProfileData == undefined ||
  //       userProfileData == ''
  //     ) {
  //       props.navigation.navigate('AuthNavi', {screen: 'Login'});
  //     }
  //   }, [userProfileData]);

  //   const getUserDetails = async () => {
  //     dispatch(userProfileDetails());
  //   };

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        animation: 'slide_from_right',
        tabBarActiveTintColor: '#3BA1FB',
        tabBarActiveBackgroundColor: '#043142',
        tabBarInactiveBackgroundColor: '#043142',
        tabBarInactiveTintColor: 'white',
        lazy: true,
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        listeners={({navigation, route}) => ({
          tabPress: e => {
            e.preventDefault();

            props.navigation.navigate('HomeScreen', {screen: 'HomeScreen'});
          },
        })}
        options={({route}) => ({
          tabBarLabel: 'HomeScreen',
          lazy: false,
          headerShown: false,

          tabBarShowLabel: false,

          tabBarIcon: ({color, size, focused}) => {
            return focused ? (
              <Image
                source={require('./assets/Images/Home.png')}
                tintColor={'#F5BE00'}
              />
            ) : (
              <Image source={require('./assets/Images/Home.png')} />
            );
          },
        })}
      />

      <Tab.Screen
        initialParams="SearchScreen"
        name="SearchScreen"
        component={SearchScreen}
        listeners={({navigation, route}) => ({
          tabPress: e => {
            e.preventDefault();

            props.navigation.navigate('SearchScreen', {screen: 'SearchScreen'});
          },
        })}
        options={({route}) => ({
          tabBarLabel: 'SearchScreen',
          lazy: false,
          headerShown: false,

          tabBarShowLabel: false,

          tabBarIcon: ({color, size, focused}) => {
            return focused ? (
              <Image
                source={require('./assets/Images/Search.png')}
                tintColor={'#F5BE00'}
              />
            ) : (
              <Image source={require('./assets/Images/Search.png')} />
            );
          },
        })}
      />

      <Tab.Screen
        initialParams="AddScreen"
        name="AddScreen"
        component={AddScreen}
        listeners={({navigation, route}) => ({
          tabPress: e => {
            e.preventDefault();

            props.navigation.navigate('AddScreen', {screen: 'AddScreen'});
          },
        })}
        options={{
          tabBarLabel: 'AddScreen',
          lazy: false,
          headerShown: false,

          tabBarShowLabel: false,

          tabBarIcon: ({color, size, focused}) => {
            return focused ? (
              <Image
                source={require('./assets/Images/Add.png')}
                tintColor={'#F5BE00'}
              />
            ) : (
              <Image source={require('./assets/Images/Add.png')} />
            );
          },
        }}
      />

      <Tab.Screen
        initialParams="MagScreen"
        name="MagScreen"
        component={MagScreen}
        listeners={({navigation, route}) => ({
          tabPress: e => {
            e.preventDefault();

            props.navigation.navigate('MagScreen', {screen: 'MagScreen'});
          },
        })}
        options={({route}) => ({
          tabBarLabel: 'MagScreen',
          lazy: false,
          headerShown: false,

          tabBarShowLabel: false,

          tabBarIcon: ({color, size, focused}) => {
            return focused ? (
              <Image
                source={require('./assets/Images/Mag.png')}
                tintColor={'#F5BE00'}
              />
            ) : (
              <Image source={require('./assets/Images/Mag.png')} />
            );
          },
        })}
      />

      <Tab.Screen
        initialParams="ProfileScreen"
        name="ProfileScreen"
        component={ProfileScreen}
        listeners={({navigation, route}) => ({
          tabPress: e => {
            e.preventDefault();
            props.navigation.navigate('ProfileScreen', {
              screen: 'ProfileScreen',
            });
          },
        })}
        options={{
          tabBarLabel: 'ProfileScreen',
          lazy: false,
          headerShown: false,

          tabBarShowLabel: false,

          tabBarIcon: ({color, size, focused}) => {
            return focused ? (
              <Image
                source={require('./assets/Images/User.png')}
                tintColor={'#F5BE00'}
              />
            ) : (
              <Image source={require('./assets/Images/User.png')} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default MyBottomTabNavigator;
