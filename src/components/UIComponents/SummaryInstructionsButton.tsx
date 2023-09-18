import React from 'react';
import {StyledTextComp} from '../SimpleComponents/StyledTextComp';
import {StyledViewComp} from '../SimpleComponents/StyledViewComp';

type Props = {
  textContent: string;
};
export const SummaryInstructionMessage: React.FC<Props> = ({textContent}) => {
  return (
    <StyledViewComp
      borderWidth={'1px'}
      padding={'20px'}
      width={'90%'}
      alignItems={'center'}
      borderRadius={'4px'}
      borderColor={'rgb(20 40 60)'}>
      <StyledTextComp
        fontSize={'20px'}
        color={'rgb(20, 40, 60)'}
        fontWeight={'500'}>
        {textContent}
      </StyledTextComp>
    </StyledViewComp>
  );
};
