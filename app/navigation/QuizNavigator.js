import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Quiz from '../components/Quiz';
import Q2 from '../components/Q2';

const Stack = createStackNavigator();

const QuizNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true, title: '' }}>
      <Stack.Screen name='Quiz' component={Quiz} />
      <Stack.Screen name='Q2' component={Q2} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default QuizNavigator;
