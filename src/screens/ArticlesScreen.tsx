import React from 'react';

import {Header} from '../components/Header/Header';
import {SecondHeader} from '../components/SecondHeader/SecondHeader';
import {ArticlesList} from '../components/ArticlesList/ArticlesList';
import {useRoute} from '@react-navigation/native';
export const ArticlesScreen = () => {
  const route = useRoute();
  const currentScreen = route.name;
  return (
    <>
      <Header currentScreen={currentScreen} />
      <SecondHeader currentScreen={currentScreen} />
      <ArticlesList />
    </>
  );
};
