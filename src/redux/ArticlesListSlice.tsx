import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InitialArticlesList} from './InitialArticlesList';

const articlesListSlice = createSlice({
  name: 'articlesList',
  initialState: InitialArticlesList,
  reducers: {
    removeArticle: (articlesState, action: PayloadAction<string>) =>
      articlesState.filter(article => article.code !== action.payload),
  },
});

export const ArticlesListReducer = articlesListSlice.reducer;
export const {removeArticle} = articlesListSlice.actions;
