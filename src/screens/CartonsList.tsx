import {TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';

import {CartonsListItem} from '../components/CartonsList/CartonsListItem';
import {StyledViewComp} from '../components/SimpleComponents/StyledViewComp';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';
import {CartonsData} from '../types/CartonsData';
import {ListSeparator} from '../components/SimpleComponents/ListSeparator';
import {setCartonsListOrder} from '../redux/CartonsSlice';

export const CartonsList = () => {
  const dispatch = useAppDispatch();
  const cartonsList = useAppSelector(state => state.cartonsList);

  const handleDragEnd = useCallback(
    (data: CartonsData[]) => {
      dispatch(setCartonsListOrder(data));
    },
    [dispatch],
  );
  const renderTouchableItem = useCallback(
    ({item, drag}: RenderItemParams<CartonsData>) => {
      return (
        <TouchableOpacity onLongPress={drag}>
          <CartonsListItem data={item} />
        </TouchableOpacity>
      );
    },
    [],
  );
  return (
    <StyledViewComp width={'100%'}>
      <DraggableFlatList
        data={cartonsList}
        renderItem={renderTouchableItem}
        keyExtractor={item => item.barcode.toString()}
        onDragEnd={({data}) => handleDragEnd(data)}
        ItemSeparatorComponent={ListSeparator}
      />
    </StyledViewComp>
  );
};
