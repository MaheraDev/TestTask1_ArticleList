import {TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';

import {ArticlesListItem} from './ArticlesListItem';
import {StyledViewComp} from '../SimpleComponents/StyledViewComp';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';
import {ArticleData} from '../../types/ArticlesData';
import {setArticlesListOrder} from '../../redux/ArticlesListSlice';

const separator = () => <StyledViewComp height="1px" backgroundColor="grey" />;
export const ArticlesList = () => {
  const dispatch = useAppDispatch();
  const articlesList = useAppSelector(state => state.articlesList);

  const handleDragEnd = useCallback(
    (data: ArticleData[]) => {
      dispatch(setArticlesListOrder(data));
    },
    [dispatch],
  );
  const renderTouchableItem = ({item, drag}: RenderItemParams<ArticleData>) => {
    return (
      <TouchableOpacity onLongPress={drag}>
        <ArticlesListItem data={item} />
      </TouchableOpacity>
    );
  };
  return (
    <StyledViewComp width="100%">
      <DraggableFlatList
        data={articlesList}
        renderItem={renderTouchableItem}
        keyExtractor={item => item.code.toString()}
        onDragEnd={({data}) => handleDragEnd(data)}
        ItemSeparatorComponent={separator}
      />
    </StyledViewComp>
  );
};
