import React, {FC} from 'react';
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';
import {StyledViewComp} from '../SimpleComponents/StyledViewComp';
import {ListSeparator} from '../SimpleComponents/ListSeparator';
import {ArticleData} from '../../types/ArticlesData';
import {CartonsData} from '../../types/CartonsData';

type Props<T> = {
  dataList: T[];
  handleDragEnd: (data: T[]) => void;
  renderItem: ({item, drag}: RenderItemParams<T>) => React.JSX.Element;
  keyExtractor: (item: T) => string;
};

export const List: FC<Props<ArticleData | CartonsData>> = ({
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
