import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import {ArticlesList} from './screens/ArticlesList';
import {CartonsList} from './screens/CartonsList';
import {TabBar} from './screens/TabBar';
import { SummaryPage } from "./screens/SummaryPage";

const Tab = createMaterialTopTabNavigator();

export const Navigation = () => {
  const tapBar = (props: MaterialTopTabBarProps) => <TabBar {...props} />;
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={'Summary'} tabBar={tapBar}>
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
        <Tab.Screen
          name="Summary"
          component={SummaryPage}
          options={{tabBarLabel: 'Summary'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
