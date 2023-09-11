import {configureStore} from '@reduxjs/toolkit';
import {ArticlesListReducer} from './ArticlesListSlice';

export const store = configureStore({
  reducer: {
    articlesList: ArticlesListReducer,
  },
});
