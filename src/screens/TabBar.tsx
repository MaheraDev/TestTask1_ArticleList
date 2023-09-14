import React from 'react';
import {Header} from '../components/Header/Header';
import {SecondHeader} from '../components/SecondHeader/SecondHeader';
import {ParamListBase, TabNavigationState} from '@react-navigation/native';

type Props = {
  state: TabNavigationState<ParamListBase>;
};
export const TabBar: React.FC<Props> = ({state}) => {
  console.log(state);
  return (
    <>
      <Header />
      <SecondHeader currentScreen={state.routeNames[state.index]} />
    </>
  );
};
