import React, {useState} from 'react';
import {StyledViewComp} from '../components/SimpleComponents/StyledViewComp';
import {UserNameInput} from '../components/UIComponents/UserNameInput';
import {PasswordInput} from '../components/UIComponents/PasswordInput';
import {RegistrationButton} from '../components/UIComponents/RegistrationButton';
// import {ForgotPassword} from '../components/UIComponents/ForgotPassword';
import {StyledTextComp} from '../components/SimpleComponents/StyledTextComp';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {GestureResponderEvent} from 'react-native';
import {PasswordValidationMessages} from '../components/UIComponents/PasswordValidationMessages';
import {EmailValidationMessages} from '../components/UIComponents/EmailValidationMessages';

const passwordCheck = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
const emailCheck = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const RegistrationSchema = Yup.object().shape({
  email: Yup.string().email('Incorrect Email').required('Required field'),
  password: Yup.string()
    .required('Required field')
    .min(8, 'At least 8-long')
    .matches(passwordCheck, {
      message:
        'Must include digit, letter, special symbol, up to two identical symbols',
    }),
});

export const RegistrationForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisible = (event: GestureResponderEvent) => {
    setIsPasswordVisible(value => !value);
  };
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
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={values => console.warn(values)}
        validationSchema={RegistrationSchema}>
        {({handleSubmit, values, handleChange, errors}) => {
          return (
            <StyledViewComp alignItems={'center'}>
              <UserNameInput
                value={values.email}
                name={'email'}
                onChangeText={handleChange('email')}
              />
              <EmailValidationMessages
                values={values}
                emailCheck={emailCheck}
              />
              <PasswordInput
                value={values.password}
                name={'password'}
                onChangeText={handleChange('password')}
                isPasswordVisible={isPasswordVisible}
                togglePasswordVisible={togglePasswordVisible}
              />
              <PasswordValidationMessages
                values={values}
                passwordCheck={passwordCheck}
              />
              <RegistrationButton onPress={handleSubmit} />
              <StyledTextComp fontSize={'11px'} margin={'20px 0 0 0'}>
                2.3.19 (202012041745) - DEBUG
              </StyledTextComp>
            </StyledViewComp>
          );
        }}
      </Formik>
    </>
  );
};
