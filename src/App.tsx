import React, {FC} from 'react';

import {Header} from './components/Header/Header';
import {SecondHeader} from './components/SecondHeader/SecondHeader';
import {ArticlesList} from './components/ArticlesList/ArticlesList';
import {Footer} from './components/Footer/Footer';
import {StyledSafeAreaViewComp} from './components/SimpleComponents/StyledSafeAreaViewComp';
import {ListTitle} from './components/ListTitle/ListTitle';
const App: FC = () => {
  return (
    <StyledSafeAreaViewComp flex="1">
      <Header />
      <SecondHeader />
      <ListTitle />
      <ArticlesList />
      <Footer />
    </StyledSafeAreaViewComp>
  );
};

export default App;
