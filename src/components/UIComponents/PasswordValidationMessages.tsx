import React from 'react';
import {StyledViewComp} from '../SimpleComponents/StyledViewComp';
import {StyledTextComp} from '../SimpleComponents/StyledTextComp';

type Props = {
  values: {email: string; password: string};
  includeLetters: RegExp;
  includeDigits: RegExp;
  includeSpecialSymbols: RegExp;
  noRepeats: RegExp;
};
export const PasswordValidationMessages: React.FC<Props> = ({
  values,
  includeLetters,
  includeDigits,
  includeSpecialSymbols,
  noRepeats,
}) => {
  return (
    <StyledViewComp
      // flexDirection={'row'}
      // justifyContent={'space-evenly'}
      width={'90%'}>
      <StyledTextComp color={values.password.length === 0 ? 'red' : 'green'}>
        Required field
      </StyledTextComp>
      <StyledTextComp color={values.password.length < 8 ? 'red' : 'green'}>
        At least 8-long
      </StyledTextComp>
      <StyledTextComp
        // textAlign={'center'}
        color={!includeLetters.test(values.password) ? 'red' : 'green'}>
        Must include letter
      </StyledTextComp>
      <StyledTextComp
        // textAlign={'center'}
        color={!includeDigits.test(values.password) ? 'red' : 'green'}>
        Must include digit
      </StyledTextComp>
      <StyledTextComp
        // textAlign={'center'}
        color={!includeSpecialSymbols.test(values.password) ? 'red' : 'green'}>
        Must include special symbol
      </StyledTextComp>
      <StyledTextComp
        // textAlign={'center'}
        color={!noRepeats.test(values.password) ? 'red' : 'green'}>
        Up to two identical symbols
      </StyledTextComp>
    </StyledViewComp>
  );
};
