import React from 'react';

import {Header} from '../components/Header/Header';
import {SecondHeader} from '../components/SecondHeader/SecondHeader';
import {useRoute} from '@react-navigation/native';
import {Summary} from '../components/Summary';
export const SummaryScreen = () => {
  const route = useRoute();
  const currentScreen = route.name;
  return (
    <>
      <Header currentScreen={currentScreen} />
      <SecondHeader currentScreen={currentScreen} />
      <Summary />
    </>
  );
};
