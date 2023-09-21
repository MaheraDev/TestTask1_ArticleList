import {useFormik} from 'formik';
import {UserNameInput} from './UserNameInput';
import {StyledTextComp} from '../SimpleComponents/StyledTextComp';
import {PasswordInput} from './PasswordInput';
import {PasswordValidationMessages} from './PasswordValidationMessages';
import {RegistrationButton} from './RegistrationButton';
import {StyledViewComp} from '../SimpleComponents/StyledViewComp';
import React, {useState} from 'react';
import {RegistrationSchema} from '../Validation/RegistrationSchema';

const includeLetter = /(?=.*[a-zA-Z])/;
const includeDigits = /(?=.*[0-9])/;
const includeSpecialSymbols = /(?=.*[^a-zA-Z0-9])/;
const noRepeat = /^(?!.*(.).*\1.*\1)[\s\S]*$/;
export const UseFormicForm = () => {
  const newFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit<Values>(values: Values): void | Promise<any> {
      console.warn(values);
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: RegistrationSchema,
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisible = () => {
    setIsPasswordVisible(value => !value);
  };
  const {setErrors, setFieldValue, errors, values, handleChange, handleSubmit} =
    newFormik;
  const handleEmailInput = (value: string) => {
    console.log('value');
    console.log(value);
    const updatedErrors = {...errors};
    delete updatedErrors.email;
    setErrors({});
    setFieldValue('email', value);
  };
  return (
    <StyledViewComp alignItems={'center'}>
      <UserNameInput
        value={newFormik.values.email}
        name={'email'}
        onChangeText={handleEmailInput}
      />
      {errors.email && (
        <StyledTextComp color={'red'}>{errors.email}</StyledTextComp>
      )}
      <PasswordInput
        value={values.password}
        name={'password'}
        onChangeText={handleChange('password')}
        isPasswordVisible={isPasswordVisible}
        togglePasswordVisible={togglePasswordVisible}
      />
      <PasswordValidationMessages
        values={values}
        includeLetters={includeLetter}
        includeDigits={includeDigits}
        includeSpecialSymbols={includeSpecialSymbols}
        noRepeats={noRepeat}
      />
      <RegistrationButton onPress={handleSubmit} />
      <StyledTextComp fontSize={'11px'} margin={'20px 0 0 0'}>
        2.3.19 (202012041745) - DEBUG
      </StyledTextComp>
    </StyledViewComp>
  );
};
