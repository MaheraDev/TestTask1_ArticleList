import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {store} from './redux/store';
import {Navigation} from './Navigation';
import {StyledSafeAreaViewComp} from './components/SimpleComponents/StyledSafeAreaViewComp';
const App: FC = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <StyledSafeAreaViewComp flex={'1'}>
          <Navigation />
        </StyledSafeAreaViewComp>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
