import React from 'react';
import {Header} from '../components/Header/Header';
import {SecondHeader} from '../components/SecondHeader/SecondHeader';
import {ParamListBase, TabNavigationState} from '@react-navigation/native';

type Props = {
  state: TabNavigationState<ParamListBase>;
};
export const TabBar: React.FC<Props> = ({state}) => {
  const currentScreen = state.routeNames[state.index];
  return (
    <>
      <Header currentScreen={currentScreen} />

      <SecondHeader currentScreen={currentScreen} />
    </>
  );
};
