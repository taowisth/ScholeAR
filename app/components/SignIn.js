import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import AppCLone from './AppCLone';

const SignIn = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign In</Text>
      <Button
        onPress={() => navigation.navigate('AppCLone')}
        title='Move to another screen!'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SignIn;
