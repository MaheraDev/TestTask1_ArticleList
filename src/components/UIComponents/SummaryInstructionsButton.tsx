import React from 'react';
import {StyledTextComp} from '../SimpleComponents/StyledTextComp';
import {StyledButtonComp} from '../SimpleComponents/StyledButtonComp';

type Props = {
  textContent: string;
  onPress: () => void;
};
export const SummaryInstructionsButton: React.FC<Props> = ({
  textContent,
  onPress,
}) => {
  return (
    <StyledButtonComp
      borderWidth={'1px'}
      padding={'20px 10px'}
      width={'90%'}
      alignItems={'center'}
      borderRadius={'4px'}
      borderColor={'rgb(20 40 60)'}
      onPress={onPress}>
      <StyledTextComp
        fontSize={'16px'}
        color={'rgb(20, 40, 60)'}
        fontWeight={'500'}>
        {textContent}
      </StyledTextComp>
    </StyledButtonComp>
  );
};
