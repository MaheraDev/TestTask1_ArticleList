import React from 'react';
import {StyledTextInput} from '../SimpleComponents/StyledTextInput';
import {StyledTextComp} from '../SimpleComponents/StyledTextComp';
import {StyledViewComp} from '../SimpleComponents/StyledViewComp';
import {StyledButtonComp} from '../SimpleComponents/StyledButtonComp';
import HidePassword from '../../images/RegistrationForm/HidePassword.svg';
import ShowPassword from '../../images/RegistrationForm/ShowPassword.svg';

type Props = {
  isPasswordVisible?: boolean;
  value: string;
  name?: string;
  onChangeText?: any;
  togglePasswordVisible?: (event: any) => void;
};
export const PasswordInput: React.FC<Props> = ({
  isPasswordVisible,
  value,
  onChangeText,
  name,
  togglePasswordVisible
}) => {
  return (
    <StyledViewComp alignSelf={'center'} width={'90%'} marginTop={'10px'}>
      <StyledTextComp
        color={'#aaa'}
        alignSelf={'flex-start'}
        margin={'10px 0 0 0'}
        fontWeight={'600'}>
        PASSWORD
      </StyledTextComp>
      <StyledTextInput
        borderBottomWidth={'1px'}
        borderBottomColor={'#aaa'}
        padding={'5px'}
        value={value}
        name={name}
        placeholder={'Input password'}
        onChangeText={onChangeText}
        secureTextEntry={!isPasswordVisible}
      />
      <StyledButtonComp
        onPress={togglePasswordVisible}
        position={'absolute'}
        right={'20px'}
        bottom={isPasswordVisible ? '2px' : '0'}
        height={'30px'}>
        {isPasswordVisible ? (
          <HidePassword height={'30px'} width={'30px'} fill={'#999'} />
        ) : (
          <ShowPassword height={'30px'} width={'30px'} fill={'#999'} />
        )}
      </StyledButtonComp>
    </StyledViewComp>
  );
};
