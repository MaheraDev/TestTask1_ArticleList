import {TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';

import {ArticlesListItem} from './ArticlesListItem';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {RenderItemParams} from 'react-native-draggable-flatlist';
import {ArticleData} from '../../types/ArticlesData';
import {setArticlesListOrder} from '../../redux/ArticlesListSlice';
import {List} from '../UIComponents/List';

export const ArticlesList = () => {
  const dispatch = useAppDispatch();
  const articlesList = useAppSelector(state => state.articlesList);

  const handleDragEnd = useCallback(
    (data: ArticleData[]) => {
      dispatch(setArticlesListOrder(data));
    },
    [dispatch],
  );
  const renderTouchableItem = useCallback(
    ({item, drag}: RenderItemParams<ArticleData>) => {
      return (
        <TouchableOpacity onLongPress={drag}>
          <ArticlesListItem data={item} />
        </TouchableOpacity>
      );
    },
    [],
  );
  return (
    <List<ArticleData>
      dataList={articlesList}
      handleDragEnd={handleDragEnd}
      renderItem={renderTouchableItem}
      keyExtractor={(item: {id: number}) => item.id.toString()}
    />
  );
};
