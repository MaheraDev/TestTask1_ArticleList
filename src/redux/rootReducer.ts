import {combineReducers} from 'redux';
import {ArticlesListReducer} from './ArticlesListSlice';

export const rootReducer = combineReducers({
  articlesList: ArticlesListReducer,
});
