import {combineReducers} from 'redux';
import {ArticlesListReducer} from './ArticlesListSlice';
import {CartonsListReducer} from './CartonsSlice';
import {SummaryPageReducer} from './SummaryPageSlice';

export const rootReducer = combineReducers({
  articlesList: ArticlesListReducer,
  cartonsList: CartonsListReducer,
  summaryPage: SummaryPageReducer,
});
