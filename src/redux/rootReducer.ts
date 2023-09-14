import {combineReducers} from 'redux';
import {ArticlesListReducer} from './ArticlesListSlice';
import {CartonsListReducer} from './CartonsSlice';

export const rootReducer = combineReducers({
  articlesList: ArticlesListReducer,
  cartonsList: CartonsListReducer,
});
