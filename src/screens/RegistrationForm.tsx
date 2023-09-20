import React, {useState} from 'react';
import {StyledViewComp} from '../components/SimpleComponents/StyledViewComp';
import {UserNameInput} from '../components/UIComponents/UserNameInput';
import {PasswordInput} from '../components/UIComponents/PasswordInput';
import {RegistrationButton} from '../components/UIComponents/RegistrationButton';
import {StyledTextComp} from '../components/SimpleComponents/StyledTextComp';
import {ErrorMessage, Formik} from 'formik';
import * as Yup from 'yup';
import {PasswordValidationMessages} from '../components/UIComponents/PasswordValidationMessages';

const includeLetter = /(?=.*[a-zA-Z])/;
const includeDigits = /(?=.*[0-9])/;
const includeSpecialSymbols = /(?=.*[^a-zA-Z0-9])/;
const noRepeat = /^(?!.*(.).*\1.*\1)[\s\S]*$/;

const RegistrationSchema = Yup.object().shape({
  email: Yup.string().email('Incorrect Email').required('Required field'),
});

export const RegistrationForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const togglePasswordVisible = () => {
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
        onSubmit={values => {
          console.warn(values);
        }}
        validationSchema={RegistrationSchema}>
        {({handleSubmit, values, handleChange, isValid}) => {
          // const customSubmit = isValid ? handleSubmit : setIsErrorVisible(true);
          const handleEmailInput = (event: any) => {
            setIsErrorVisible(false);
            console.warn(isErrorVisible);
            handleChange('email')(event);
          };
          return (
            <StyledViewComp alignItems={'center'}>
              <UserNameInput
                value={values.email}
                name={'email'}
                onChangeText={handleEmailInput}
              />
              {isErrorVisible && (
                <ErrorMessage name="email">
                  {msg => <StyledTextComp color={'red'}>{msg}</StyledTextComp>}
                </ErrorMessage>
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
              <RegistrationButton
                onPress={() =>
                  isValid ? handleSubmit() : setIsErrorVisible(true)
                }
              />
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
