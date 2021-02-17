import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../components/Profile';
import Test from '../components/Test';
import Lecture from '../components/Lecture';
import Favs from '../components/Favs'
import Settings from '../components/Settings'
import Scanner from '../components/Scanner'

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true, title: '' }}>
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='Test' component={Test} />
      <Stack.Screen name='Lecture' component={Lecture} />
      <Stack.Screen name='Favs' component={Favs} />
      <Stack.Screen name='Settings' component={Settings} />
      <Stack.Screen name='Scanner' component={Scanner} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ProfileNavigator;
