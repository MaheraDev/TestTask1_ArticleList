import {StyledTextComp} from '../SimpleComponents/StyledTextComp';
import {StyledButtonComp} from '../SimpleComponents/StyledButtonComp';
import React, {FC} from 'react';

type Props = {
  textContent: string;
  backgroundColor?: string;
  onPress?: () => void;
};
export const ListSelectionButton: FC<Props> = props => {
  const {textContent, onPress, backgroundColor} = props;
  return (
    <StyledButtonComp
      flex={'1'}
      alignItems={'center'}
      justifyContent={'center'}
      padding={'8px'}
      borderRadius={'4px'}
      backgroundColor={backgroundColor}
      borderWidth={'1px'}
      borderColor={'#eee'}
      onPress={onPress}>
      <StyledTextComp fontSize={'16px'} fontWeight={'700'}>
        {textContent}
      </StyledTextComp>
    </StyledButtonComp>
  );
};
