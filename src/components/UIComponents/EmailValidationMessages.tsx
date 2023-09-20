import React from 'react';
import {StyledViewComp} from '../SimpleComponents/StyledViewComp';
import {StyledTextComp} from '../SimpleComponents/StyledTextComp';

type Props = {
  values: {email: string; password: string};
  emailCheck: RegExp;
};
export const EmailValidationMessages: React.FC<Props> = ({
  values,
  emailCheck,
}) => {
  return (
    <>
      <StyledViewComp
        flexDirection={'row'}
        justifyContent={'space-evenly'}
        width={'90%'}>
        <StyledTextComp color={values.email.length === 0 ? 'red' : 'green'}>
          Required field
        </StyledTextComp>
        <StyledTextComp
          color={!emailCheck.test(values.email) ? 'red' : 'green'}>
          Incorrect Email
        </StyledTextComp>
      </StyledViewComp>
    </>
  );
};
