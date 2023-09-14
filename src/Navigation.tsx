import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ArticlesList} from './screens/ArticlesList';
import {CartonsList} from './screens/CartonsList';
import {TabBar} from './screens/TabBar';

const Tab = createMaterialTopTabNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={'Articles'}
        tabBar={props => <TabBar {...props} />}>
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
    </NavigationContainer>
  );
};
