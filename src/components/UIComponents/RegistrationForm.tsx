import React, {useCallback, useState} from 'react';
import {useFormik} from 'formik';
import {StyledTextComp} from '../SimpleComponents/StyledTextComp';
import {RegistrationButton} from './RegistrationButton';
import {StyledViewComp} from '../SimpleComponents/StyledViewComp';
import {FormField} from '../SimpleComponents/FormField';
import {StyledButtonComp} from '../SimpleComponents/StyledButtonComp';
import HidePassword from '../../images/RegistrationForm/HidePassword.svg';
import ShowPassword from '../../images/RegistrationForm/ShowPassword.svg';
import {passwordErrors, Validation} from '../Validation/Validation';
import {Values} from '../../types/RegistrationForm';

const initialValues: Values = {
  email: '',
  password: '',
};
export const RegistrationForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isEmailErrorVisible, setIsEmailErrorVisible] = useState(false);
  const Formik = useFormik({
    initialValues: initialValues,
    onSubmit(values): void {
      console.warn(values);
    },
    validate: Validation,
  });
  const {values, setFieldError, handleChange, errors, handleSubmit} = Formik;
  const handleFieldUpdate = (fieldKey: string, value: string) => {
    setIsEmailErrorVisible(false);
    setFieldError(fieldKey, undefined);
    handleChange(fieldKey)(value);
  };
  const handleEmailUpdate = (value: string) =>
    handleFieldUpdate('email', value);
  const handlePasswordUpdate = (value: string) =>
    handleFieldUpdate('password', value);
  const togglePasswordVisible = useCallback(() => {
    setIsPasswordVisible(value => !value);
  }, []);
  const errorColor = useCallback(
    (e: string) => {
      if (!errors.password) {
        return 'red';
      }
      if (errors.password.includes(e)) {
        return 'red';
      }
      return 'green';
    },
    [errors.password],
  );
  const handleRegisterButton = useCallback(() => {
    setIsEmailErrorVisible(true);
    handleSubmit();
  }, []);
  return (
    <StyledViewComp alignItems={'center'}>
      <FormField
        header={'email'}
        name={'email'}
        value={values.email}
        placeholder={'email'}
        onChangeText={handleEmailUpdate}
        errorData={errors.email}
      />
      {isEmailErrorVisible && (
        <StyledTextComp color={'red'}>{errors.email}</StyledTextComp>
      )}
      <StyledViewComp width={'100%'}>
        <FormField
          name={'Password'}
          header={'Password'}
          value={values.password}
          placeholder={'Password'}
          secureTextEntry={!isPasswordVisible}
          onChangeText={handlePasswordUpdate}
          errorData={errors.password}
        />
        <StyledButtonComp
          onPress={togglePasswordVisible}
          alignSelf={'flex-end'}
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
      <StyledViewComp width={'90%'} marginTop={'5px'}>
        {Object.values(passwordErrors).map(e => (
          <StyledTextComp key={e} color={errorColor(e)}>
            {e}
          </StyledTextComp>
        ))}
      </StyledViewComp>
      <RegistrationButton onPress={handleRegisterButton} />
      <StyledTextComp fontSize={'11px'} margin={'20px 0 0 0'}>
        2.3.19 (202012041745) - DEBUG
      </StyledTextComp>
    </StyledViewComp>
  );
};
