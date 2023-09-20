import React, {useState} from 'react';
import {StyledViewComp} from '../components/SimpleComponents/StyledViewComp';
import {UserNameInput} from '../components/UIComponents/UserNameInput';
import {PasswordInput} from '../components/UIComponents/PasswordInput';
import {RegistrationButton} from '../components/UIComponents/RegistrationButton';
import {StyledTextComp} from '../components/SimpleComponents/StyledTextComp';
import {ErrorMessage, Formik} from 'formik';
import {PasswordValidationMessages} from '../components/UIComponents/PasswordValidationMessages';
import {RegistrationSchema} from '../components/Validation';

const includeLetter = /(?=.*[a-zA-Z])/;
const includeDigits = /(?=.*[0-9])/;
const includeSpecialSymbols = /(?=.*[^a-zA-Z0-9])/;
const noRepeat = /^(?!.*(.).*\1.*\1)[\s\S]*$/;

export const RegistrationForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
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
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={RegistrationSchema}>
        {({
          handleSubmit,
          values,
          setErrors,
          setFieldValue,
          handleChange,
          errors,
        }) => {
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
                value={values.email}
                name={'email'}
                onChangeText={handleEmailInput}
              />
              <ErrorMessage name="email">
                {msg => {
                  return <StyledTextComp color={'red'}>{msg}</StyledTextComp>;
                }}
              </ErrorMessage>
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
        }}
      </Formik>
    </>
  );
};
