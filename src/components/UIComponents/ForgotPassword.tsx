import React from 'react';
import {StyledTextComp} from '../SimpleComponents/StyledTextComp';
import {StyledButtonComp} from '../SimpleComponents/StyledButtonComp';

type Props = {
  onPress: () => void;
};
export const ForgotPassword: React.FC<Props> = ({onPress}) => {
  return (
    <StyledButtonComp
      margin={'14px 0 0 0'}
      alignItems={'center'}
      onPress={onPress}>
      <StyledTextComp
        fontSize={'18px'}
        color={'rgb(75 104 128)'}
        fontWeight={'500'}>
        FORGOT PASSWORD?
      </StyledTextComp>
    </StyledButtonComp>
  );
};
