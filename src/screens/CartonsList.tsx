import {TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';

import {CartonsListItem} from '../components/CartonsList/CartonsListItem';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {RenderItemParams} from 'react-native-draggable-flatlist';
import {CartonsData} from '../types/CartonsData';
import {setCartonsListOrder} from '../redux/CartonsSlice';
import {List} from '../components/UIComponents/List';

export const CartonsList = () => {
  const dispatch = useAppDispatch();
  const cartonsList: CartonsData[] = useAppSelector(state => state.cartonsList);

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
  console.log(typeof cartonsList);
  return (
    <List
      dataList={cartonsList}
      handleDragEnd={handleDragEnd}
      renderItem={renderTouchableItem}
      keyExtractor={(item: {id: number}) => item.id.toString()}
    />
  );
};
