import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Scanner from '../components/Scanner';
import Quiz from '../components/Quiz';

const Stack = createStackNavigator();

const ARNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true, title: '' }}>
      <Stack.Screen name='Profile' component={Scanner} />
      <Stack.Screen name='Test' component={Quiz} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ARNavigator;
