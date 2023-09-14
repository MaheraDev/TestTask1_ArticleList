import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InitialArticlesList} from './InitialArticlesList';
import {ArticleData} from '../types/ArticlesData';

const articlesListSlice = createSlice({
  name: 'articlesList',
  initialState: InitialArticlesList,
  reducers: {
    removeArticle: (articlesState, action: PayloadAction<string>) =>
      articlesState.filter(article => article.code !== action.payload),
    setArticlesListOrder: (
      articlesState,
      action: PayloadAction<ArticleData[]>,
    ) => {
      return action.payload;
    },
  },
});

export const ArticlesListReducer = articlesListSlice.reducer;
export const {removeArticle, setArticlesListOrder} = articlesListSlice.actions;
