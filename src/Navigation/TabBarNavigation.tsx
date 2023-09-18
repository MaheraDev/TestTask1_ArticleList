import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import {ArticlesList} from '../components/ArticlesList/ArticlesList';
import {CartonsList} from '../components/CartonsList/CartonsList';
import {TabBar} from '../screens/TabBar';

const Tab = createMaterialTopTabNavigator();

export const TabBarNavigation = () => {
  const tapBar = (props: MaterialTopTabBarProps) => <TabBar {...props} />;
  return (
    <Tab.Navigator initialRouteName={'Cartons'} tabBar={tapBar}>
      <Tab.Screen
        name="Cartons"
        component={CartonsList}
        options={{tabBarLabel: 'Cartons'}}
      />
      <Tab.Screen
        name="Articles"
        component={ArticlesList}
        options={{tabBarLabel: 'Articles'}}
      />
    </Tab.Navigator>
  );
};
