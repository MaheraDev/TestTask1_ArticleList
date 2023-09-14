import React from 'react';
import {SecHeadItem} from './SecHeadItem';
import {StyledViewComp} from '../SimpleComponents/StyledViewComp';

const textContent = {
  barcode: '25003900020001902003',
  quantity: '9',
};
export const SecondHeader = () => {
  return (
    <StyledViewComp
      padding={'10px 5px'}
      flexDirection={'row'}
      justifyContent={'space-between'}
      backgroundColor={'#ddd'}>
      <SecHeadItem textContent={textContent.barcode} />
      <SecHeadItem textContent={textContent.quantity} />
    </StyledViewComp>
  );
};
