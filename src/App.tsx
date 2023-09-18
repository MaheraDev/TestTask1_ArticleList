import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {store} from './redux/store';
import {StyledSafeAreaViewComp} from './components/SimpleComponents/StyledSafeAreaViewComp';
import {SideBarNavigation} from './Navigation/SideBarNavigation';
const App: FC = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <StyledSafeAreaViewComp flex={'1'}>
          <SideBarNavigation />
        </StyledSafeAreaViewComp>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
