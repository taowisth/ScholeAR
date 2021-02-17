import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './../navigation/TabNavigator';
import TabBarProvider from './../contexts/TabBarProvider';

const AppCLone = () => {
  return(
    <TabBarProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </TabBarProvider>
  
  );
};

export default AppCLone;