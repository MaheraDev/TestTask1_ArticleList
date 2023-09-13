import React, {FC, ReactNode} from 'react';
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';
import {StyledViewComp} from '../SimpleComponents/StyledViewComp';
import {ListSeparator} from '../SimpleComponents/ListSeparator';
import {ArticleData} from '../../types/ArticlesData';
import {CartonsData} from '../../types/CartonsData';

type Props = {
  dataList: (ArticleData | CartonsData)[];
  handleDragEnd: (data: (ArticleData | CartonsData)[]) => void;
  renderItem: (
    params: RenderItemParams<ArticleData | CartonsData>,
  ) => ReactNode;
  keyExtractor: (item: ArticleData | CartonsData) => string;
};

export const List: FC<Props> = ({
  dataList,
  handleDragEnd,
  renderItem,
  keyExtractor,
}) => {
  return (
    <StyledViewComp width={'100%'}>
      <DraggableFlatList
        data={dataList}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onDragEnd={({data}) => handleDragEnd(data)}
        ItemSeparatorComponent={ListSeparator}
      />
    </StyledViewComp>
  );
};
