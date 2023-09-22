import React from 'react';
import {Field} from 'formik';
import {StyledTextComp} from './StyledTextComp';
import {StyledViewComp} from './StyledViewComp';
import { StyledTextInput } from "./StyledTextInput";

type Props = {
  name: string;
  header: string;
  value: string;
  placeholder: string;
  onBlur?: boolean;
  validate?: Function;
  onChangeText?: Function;
  errorData?: Object;
  secureTextEntry?: boolean;
};

export const FormField: React.FC<Props> = ({
  name,
  header,
  value,
  placeholder,
  onBlur,
  validate,
  onChangeText,
  errorData,
  secureTextEntry,
}) => {
  return (
    <StyledViewComp alignSelf={'center'} width={'90%'} marginTop={'10px'}>
      <StyledTextComp
        color={'#aaa'}
        alignSelf={'flex-start'}
        margin={'10px 0 0 0'}
        fontWeight={'600'}>
        {header}
      </StyledTextComp>
      <StyledTextInput
        name={name}
        validate={validate}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        onBlur={onBlur}
        errorData={errorData}
        secureTextEntry={secureTextEntry}
        borderBottomWidth={'1px'}
        borderBottomColor={'#aaa'}
        padding={'5px'}
      />
    </StyledViewComp>
  );
};
