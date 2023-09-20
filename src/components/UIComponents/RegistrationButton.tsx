import React from 'react';
import {StyledTextComp} from '../SimpleComponents/StyledTextComp';
import {StyledButtonComp} from '../SimpleComponents/StyledButtonComp';

type Props = {
  onPress: () => void;
};
export const RegistrationButton: React.FC<Props> = ({onPress}) => {
  return (
    <StyledButtonComp
      margin={'14px 0 0 0'}
      padding={'20px 10px'}
      width={'90%'}
      alignItems={'center'}
      backgroundColor={'rgb(19 52 83)'}
      onPress={onPress}>
      <StyledTextComp fontSize={'18px'} color={'#fff'} fontWeight={'400'}>
        REGISTRATION
      </StyledTextComp>
    </StyledButtonComp>
  );
};
