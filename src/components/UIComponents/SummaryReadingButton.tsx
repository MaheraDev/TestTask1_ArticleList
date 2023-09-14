import React from 'react';
import {StyledButtonComp} from '../SimpleComponents/StyledButtonComp';
import {StyledTextComp} from '../SimpleComponents/StyledTextComp';

type Props = {
  textContent: string;
};
export const SummaryReadingButton: React.FC<Props> = ({textContent}) => {
  return (
    <StyledButtonComp
      borderWidth={'1px'}
      padding={'20px'}
      width={'95%'}
      alignItems={'center'}
      borderRadius={'4px'}
      color={'rgb(20 40 60)'}>
      <StyledTextComp
        fontSize={'20px'}
        color={'rgb(20, 40, 60)'}
        fontWeight={'500'}>
        {textContent}
      </StyledTextComp>
    </StyledButtonComp>
  );
};
