import React, {FC} from 'react';
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';
import {StyledViewComp} from '../SimpleComponents/StyledViewComp';
import {ListSeparator} from '../SimpleComponents/ListSeparator';
import {ArticleData} from '../../types/ArticlesData';
import {CartonsData} from '../../types/CartonsData';

type DataType = ArticleData | CartonsData;
type DragEndFuncType = (data: DataType[]) => void;
type RenderItemType = ({
  item,
  drag,
}: RenderItemParams<DataType>) => React.JSX.Element;

type KeyExtractorType = (item: DataType) => string;

type Props = {
  dataList: DataType;
  handleDragEnd: DragEndFuncType;
  renderItem: RenderItemType;
  keyExtractor: KeyExtractorType;
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

// import React, {FC} from 'react';
// import DraggableFlatList, {
//   RenderItemParams,
// } from 'react-native-draggable-flatlist';
// import {StyledViewComp} from '../SimpleComponents/StyledViewComp';
// import {ListSeparator} from '../SimpleComponents/ListSeparator';
// import {ArticleData} from '../../types/ArticlesData';
// import {CartonsData} from '../../types/CartonsData';

// type Props = {
//   dataList: Object[];
//   handleDragEnd: (data: any[]) => void;
//   renderItem: ({item, drag}: RenderItemParams<any>) => React.JSX.Element;
//   keyExtractor: (item: any) => string;
// };
//
// export const List: FC<Props> = ({
//                                   dataList,
//                                   handleDragEnd,
//                                   renderItem,
//                                   keyExtractor,
//                                 }) => {
//   return (
//     <StyledViewComp width={'100%'}>
//       <DraggableFlatList
//         data={dataList}
//         renderItem={renderItem}
//         keyExtractor={keyExtractor}
//         onDragEnd={({data}) => handleDragEnd(data)}
//         ItemSeparatorComponent={ListSeparator}
//       />
//     </StyledViewComp>
//   );
// };
