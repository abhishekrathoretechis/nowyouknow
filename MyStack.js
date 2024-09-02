import {createStackNavigator} from '@react-navigation/stack';
import Form from './Screens/Form';
import Fetch from './Screens/Fetch';
import ToDoList from './Screens/ToDoList';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Form">
      {/* <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      /> */}

      <Stack.Screen
        name="Form"
        component={Form}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Fetch"
        component={Fetch}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ToDoList"
        component={ToDoList}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
