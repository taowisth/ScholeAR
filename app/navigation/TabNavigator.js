import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Create from '../components/Create';
import Profile from '../components/Profile';
import Chats from '../components/Chats';
import Favs from '../components/Favs';
import TabBar from '../components/TabBar';
import Scanner from '../components/Scanner'
import Quiz from '../components/Quiz'
import ProfileNavigator from './ProfileNavigator';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name='Ana Sayfa'
        component={Home}
        initialParams={{ icon: 'home' }}
      />
      <Tab.Screen
        name='Tara'
        component={Scanner}
        initialParams={{ icon: 'scan1' }}
      />
    
      <Tab.Screen
        name='Favori'
        component={Favs}
        initialParams={{ icon: 'hearto' }}
      />
      <Tab.Screen
        name='Quiz' //change with Chats.js
        component={Quiz}
        initialParams={{ icon: 'chatbubbles' }}
      />
      <Tab.Screen
        name='Profil'
        component={ProfileNavigator}
        initialParams={{ icon: 'user' }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;