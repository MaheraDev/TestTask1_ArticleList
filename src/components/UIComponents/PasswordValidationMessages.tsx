import React from 'react';
import {StyledViewComp} from '../SimpleComponents/StyledViewComp';
import {StyledTextComp} from '../SimpleComponents/StyledTextComp';

type Props = {
  values: {email: string; password: string};
  passwordCheck: RegExp;
};
export const PasswordValidationMessages: React.FC<Props> = ({
  values,
  passwordCheck,
}) => {
  return (
    <>
      <StyledViewComp
        flexDirection={'row'}
        justifyContent={'space-evenly'}
        width={'90%'}>
        <StyledTextComp color={values.password.length === 0 ? 'red' : 'green'}>
          Required field
        </StyledTextComp>
        <StyledTextComp color={values.password.length < 8 ? 'red' : 'green'}>
          At least 8-long
        </StyledTextComp>
      </StyledViewComp>
      <StyledTextComp
        textAlign={'center'}
        color={!passwordCheck.test(values.password) ? 'red' : 'green'}>
        Must include digit, letter, special symbol, up to two identical symbols
      </StyledTextComp>
    </>
  );
};
