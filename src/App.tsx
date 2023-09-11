import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {Header} from './components/Header/Header';
import {SecondHeader} from './components/SecondHeader/SecondHeader';
import {ArticlesList} from './components/ArticlesList/ArticlesList';
import {Footer} from './components/Footer/Footer';
import {StyledSafeAreaViewComp} from './components/SimpleComponents/StyledSafeAreaViewComp';
import {ListTitle} from './components/ListTitle/ListTitle';
import {store} from './redux/store';
const App: FC = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <StyledSafeAreaViewComp flex="1">
          <Header />
          <SecondHeader />
          <ListTitle />
          <ArticlesList />
          <Footer />
        </StyledSafeAreaViewComp>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
