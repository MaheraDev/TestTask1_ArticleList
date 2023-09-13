import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {store} from './redux/store';
import {Navigation} from './Navigation';
const App: FC = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Navigation />
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
// const App: FC = () => {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <GestureHandlerRootView style={{flex: 1}}>
//           <StyledSafeAreaViewComp flex="1">
//             <Header />
//             <SecondHeader />
//             <ListTitle />
//             {/*<ArticlesList />*/}
//             <CartonsList />
//             <Footer />
//           </StyledSafeAreaViewComp>
//         </GestureHandlerRootView>
//       </NavigationContainer>
//     </Provider>
//   );
// };
//
// export default App;
