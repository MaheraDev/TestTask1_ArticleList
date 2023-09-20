import React from 'react';
import {StyledTextInput} from '../SimpleComponents/StyledTextInput';
import {StyledTextComp} from '../SimpleComponents/StyledTextComp';
import {StyledViewComp} from '../SimpleComponents/StyledViewComp';

type Props = {
  value: string;
  name?: string;
  onChangeText?: any;
};
export const UserNameInput: React.FC<Props> = ({value, onChangeText, name}) => {
  return (
    <StyledViewComp alignSelf={'center'} width={'90%'} marginTop={'10px'}>
      <StyledTextComp
        color={'#aaa'}
        alignSelf={'flex-start'}
        margin={'10px 0 0 0'}
        fontWeight={'600'}>
        USERNAME
      </StyledTextComp>
      <StyledTextInput
        onChangeText={onChangeText}
        borderBottomWidth={'1px'}
        borderBottomColor={'#aaa'}
        padding={'5px'}
        placeholder={'Input e-mail'}
        value={value}
        name={name}
      />
    </StyledViewComp>
  );
};
