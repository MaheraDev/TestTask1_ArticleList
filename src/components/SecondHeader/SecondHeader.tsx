import React from 'react';
import {SecHeadItem} from './SecHeadItem';
import {Images} from '../../images/images';
import {StyledViewComp} from '../SimpleComponents/StyledViewComp';

const {packageIcon, quantity} = Images;
const textContent = {
  barcode: '25003900020001902003',
  quantity: '9',
};
export const SecondHeader = () => {
  return (
    <StyledViewComp
      padding="10px 5px"
      flexDirection="row"
      justifyContent="space-between"
      backgroundColor="#ddd">
      <SecHeadItem iconPath={packageIcon} textContent={textContent.barcode} />
      <SecHeadItem iconPath={quantity} textContent={textContent.quantity} />
    </StyledViewComp>
  );
};
