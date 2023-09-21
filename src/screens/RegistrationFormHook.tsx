import React from 'react';
import {UseFormicForm} from '../components/UIComponents/useFormicForm';
import {StyledTextComp} from '../components/SimpleComponents/StyledTextComp';
import {StyledViewComp} from '../components/SimpleComponents/StyledViewComp';

export const RegistrationFormHook = () => {
  return (
    <>
      <StyledViewComp
        height={'40%'}
        flexDirection={'row'}
        backgroundColor={'rgb(225 157 81)'}
        justifyContent={'center'}
        alignItems={'center'}>
        <StyledTextComp fontSize={'100px'} color={'white'}>
          D
        </StyledTextComp>
        <StyledTextComp
          fontSize={'30px'}
          color={'white'}
          position={'relative'}
          top={'-30px'}
          right={'15px'}>
          {'\xAE'}
        </StyledTextComp>
      </StyledViewComp>
      <UseFormicForm />
    </>
  );
};
