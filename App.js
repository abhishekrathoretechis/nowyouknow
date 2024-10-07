import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './MyStack';
import {PostsProvider} from './PostsContext';

const App = () => {
  return (
    <NavigationContainer>
      <PostsProvider>
        <MyStack />
      </PostsProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
