import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {CartonsScreen} from '../screens/CartonsScreen';
import {ArticlesScreen} from '../screens/ArticlesScreen';
import {SummaryScreen} from '../screens/SummaryScreen';
import {RegistrationForm} from '../components/UIComponents/RegistrationForm';
import {RegistrationFormHook} from '../screens/RegistrationFormHook';

const Drawer = createDrawerNavigator();

export const SideBarNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Cartons" component={CartonsScreen} />
        <Drawer.Screen name="Articles" component={ArticlesScreen} />
        <Drawer.Screen name="Summary" component={SummaryScreen} />
        <Drawer.Screen name="Registration" component={RegistrationForm} />
        {/*<Drawer.Screen*/}
        {/*  name="RegistrationHook"*/}
        {/*  component={RegistrationFormHook}*/}
        {/*/>*/}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
