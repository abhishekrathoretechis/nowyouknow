import {createStackNavigator} from '@react-navigation/stack';

import IntroSliderScreen from './Screens/IntroSliderScreen/IntroSliderScreen';
import MyBottomTabNavigator from './MyBottomTabNavigator';
import LoginScreen from './Screens/LoginScreen/LoginScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="IntroSliderScreen">
      <Stack.Screen
        name="IntroSliderScreen"
        component={IntroSliderScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyBottomTabNavigator"
        component={MyBottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
