import React, {FC} from 'react';

import {StyledViewComp} from '../SimpleComponents/StyledViewComp';
import {StyledTextComp} from '../SimpleComponents/StyledTextComp';
import PackageIcon from '../../images/SecondHeader/PackageIcon.svg';
import GoodsQuantity from '../../images/SecondHeader/GoodsQuantity.svg';

type Props = {
  textContent: string | number;
};
export const SecHeadItem: FC<Props> = ({textContent}) => {
  return (
    <StyledViewComp alignItems={'center'} flexDirection={'row'}>
      {typeof textContent === 'string' ? <PackageIcon /> : <GoodsQuantity />}
      <StyledTextComp fontSize={'12px'}>{textContent}</StyledTextComp>
    </StyledViewComp>
  );
};
