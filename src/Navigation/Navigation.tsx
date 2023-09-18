import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {ArticlesScreen} from '../screens/ArticlesScreen';
import {CartonsScreen} from '../screens/CartonsScreen';
import {SummaryScreen} from '../screens/SummaryScreen';

const Stack = createStackNavigator();

// const screens = {};
export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Articles'} component={ArticlesScreen} />
        <Stack.Screen name={'Cartons'} component={CartonsScreen} />
        <Stack.Screen name={'Articles'} component={SummaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
