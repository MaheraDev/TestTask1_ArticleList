import {TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';

import {ArticlesListItem} from '../components/ArticlesList/ArticlesListItem';
import {StyledViewComp} from '../components/SimpleComponents/StyledViewComp';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';
import {ArticleData} from '../types/ArticlesData';
import {setArticlesListOrder} from '../redux/ArticlesListSlice';
import {ListSeparator} from '../components/SimpleComponents/ListSeparator';

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
    <StyledViewComp width={'100%'}>
      <DraggableFlatList
        data={articlesList}
        renderItem={renderTouchableItem}
        keyExtractor={item => item.code.toString()}
        onDragEnd={({data}) => handleDragEnd(data)}
        ItemSeparatorComponent={ListSeparator}
      />
    </StyledViewComp>
  );
};
