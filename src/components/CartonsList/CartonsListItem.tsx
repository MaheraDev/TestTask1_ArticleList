import React, {FC} from 'react';
import {StyledButtonComp} from '../SimpleComponents/StyledButtonComp';
import {StyledTextComp} from '../SimpleComponents/StyledTextComp';
import {StyledViewComp} from '../SimpleComponents/StyledViewComp';
import {StyledSwipeableComp} from '../SimpleComponents/StyledSwipeableComp';
import {useAppDispatch} from '../../redux/hooks';
import {CartonsData} from '../../types/CartonsData';
import {removeCarton} from '../../redux/CartonsSlice';

type Props = {
  data: CartonsData;
};
export const CartonsListItem: FC<Props> = ({data}) => {
  const {barcode, amount} = data;
  const dispatch = useAppDispatch();
  const handleDeleteCarton = (c: string) => {
    dispatch(removeCarton(c));
  };
  return (
    <StyledSwipeableComp handleDeleteItem={() => handleDeleteCarton(barcode)}>
      <StyledViewComp
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent="space-between"
        padding={'15px'}>
        <StyledTextComp>{barcode}</StyledTextComp>
        <StyledButtonComp
          width={'100px'}
          borderRadius={'10px'}
          alignItems={'center'}
          justifyContent={'center'}
          backgroundColor={'green'}>
          <StyledTextComp color="white" fontWeight="700">
            {amount}
          </StyledTextComp>
        </StyledButtonComp>
        <StyledTextComp>{'>'}</StyledTextComp>
      </StyledViewComp>
    </StyledSwipeableComp>
  );
};
