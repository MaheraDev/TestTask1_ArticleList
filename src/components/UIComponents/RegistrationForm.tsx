import React, {useState} from 'react';
import {ErrorMessage, Formik, FormikProvider, useFormik} from 'formik';
import {UserNameInput} from './UserNameInput';
import {StyledTextComp} from '../SimpleComponents/StyledTextComp';
import {PasswordInput} from './PasswordInput';
import {RegistrationButton} from './RegistrationButton';
import {StyledViewComp} from '../SimpleComponents/StyledViewComp';
import {FormField} from '../SimpleComponents/FormField';
import {StyledButtonComp} from '../SimpleComponents/StyledButtonComp';
import HidePassword from '../../images/RegistrationForm/HidePassword.svg';
import ShowPassword from '../../images/RegistrationForm/ShowPassword.svg';

interface ErrorsInterface {
  email: string;
  password: string[];
}

interface Values {
  email: string;
  password: string;
}
enum passwordErrors {
  required = 'Required field',
  minLength = 'At least 8-long',
  isIncludesLetter = 'Must include letter',
  isIncludeDigit = 'Must include digit',
  isIncludeSymbol = 'Must include special symbol',
  twoIdentical = 'Up to two identical symbols',
}
const initialValues = {
  email: '',
  password: '',
};

const validation = values => {
  let errors: ErrorsInterface = {email: '', password: []};
  if (!values.email) {
    errors = {
      ...errors,
      email: 'Required field',
    };
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors = {
      ...errors,
      email: 'Incorrect Email',
    };
  }

  if (!values.password && !errors.password.includes(passwordErrors.required)) {
    const newPasswordErrors = [...errors.password, passwordErrors.required];
    errors = {
      ...errors,
      password: newPasswordErrors,
    };
  }
  if (
    values.password?.length < 8 &&
    !errors.password.includes(passwordErrors.minLength)
  ) {
    const newPasswordErrors = [...errors.password, passwordErrors.minLength];
    errors = {
      ...errors,
      password: newPasswordErrors,
    };
  }
  if (
    !/(?=.*[a-zA-Z])/.test(values.password) &&
    !errors.password.includes(passwordErrors.isIncludesLetter)
  ) {
    const newPasswordErrors = [
      ...errors.password,
      passwordErrors.isIncludesLetter,
    ];
    errors = {
      ...errors,
      password: newPasswordErrors,
    };
  }
  if (
    !/(?=.*[0-9])/.test(values.password) &&
    !errors.password.includes(passwordErrors.isIncludeDigit)
  ) {
    const newPasswordErrors = [
      ...errors.password,
      passwordErrors.isIncludeDigit,
    ];
    errors = {
      ...errors,
      password: newPasswordErrors,
    };
  }
  if (
    !/(?=.*[^a-zA-Z0-9])/.test(values.password) &&
    !errors.password.includes(passwordErrors.isIncludeSymbol)
  ) {
    const newPasswordErrors = [
      ...errors.password,
      passwordErrors.isIncludeSymbol,
    ];
    errors = {
      ...errors,
      password: newPasswordErrors,
    };
  }
  if (
    !/^(?!.*(.).*\1.*\1)[\s\S]*$/.test(values.password) &&
    !errors.password.includes(passwordErrors.twoIdentical)
  ) {
    const newPasswordErrors = [...errors.password, passwordErrors.twoIdentical];
    errors = {
      ...errors,
      password: newPasswordErrors,
    };
  }
  return errors;
};
export const RegistrationForm = () => {
  // const Formik = useFormik({
  //   initialValues: {
  //     email: '',
  //     password: '',
  //   },
  //   onSubmit(values: Values): void | Promise<any> {
  //     console.warn(values);
  //   },
  //   validateOnChange: false,
  //   validateOnBlur: false,
  //   validate: values => {
  //     let errors: ErrorsInterface = {email: '', password: []};
  //     if (!values.email) {
  //       errors = {
  //         ...errors,
  //         email: 'Required field',
  //       };
  //     } else if (!/\S+@\S+\.\S+/.test(values.email)) {
  //       errors = {
  //         ...errors,
  //         email: 'Incorrect Email',
  //       };
  //     }
  //
  //     if (
  //       !values.password &&
  //       !errors.password.includes(passwordErrors.required)
  //     ) {
  //       const newPasswordErrors = [...errors.password, passwordErrors.required];
  //       errors = {
  //         ...errors,
  //         password: newPasswordErrors,
  //       };
  //     }
  //     if (
  //       values.password?.length < 8 &&
  //       !errors.password.includes(passwordErrors.minLength)
  //     ) {
  //       const newPasswordErrors = [
  //         ...errors.password,
  //         passwordErrors.minLength,
  //       ];
  //       errors = {
  //         ...errors,
  //         password: newPasswordErrors,
  //       };
  //     }
  //     if (
  //       !/(?=.*[a-zA-Z])/.test(values.password) &&
  //       !errors.password.includes(passwordErrors.isIncludesLetter)
  //     ) {
  //       const newPasswordErrors = [
  //         ...errors.password,
  //         passwordErrors.isIncludesLetter,
  //       ];
  //       errors = {
  //         ...errors,
  //         password: newPasswordErrors,
  //       };
  //     }
  //     if (
  //       !/(?=.*[0-9])/.test(values.password) &&
  //       !errors.password.includes(passwordErrors.isIncludeDigit)
  //     ) {
  //       const newPasswordErrors = [
  //         ...errors.password,
  //         passwordErrors.isIncludeDigit,
  //       ];
  //       errors = {
  //         ...errors,
  //         password: newPasswordErrors,
  //       };
  //     }
  //     if (
  //       !/(?=.*[^a-zA-Z0-9])/.test(values.password) &&
  //       !errors.password.includes(passwordErrors.isIncludeSymbol)
  //     ) {
  //       const newPasswordErrors = [
  //         ...errors.password,
  //         passwordErrors.isIncludeSymbol,
  //       ];
  //       errors = {
  //         ...errors,
  //         password: newPasswordErrors,
  //       };
  //     }
  //     if (
  //       !/^(?!.*(.).*\1.*\1)[\s\S]*$/.test(values.password) &&
  //       !errors.password.includes(passwordErrors.twoIdentical)
  //     ) {
  //       const newPasswordErrors = [
  //         ...errors.password,
  //         passwordErrors.twoIdentical,
  //       ];
  //       errors = {
  //         ...errors,
  //         password: newPasswordErrors,
  //       };
  //     }
  //     return errors;
  //   },
  // });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={value => {
        console.warn(value);
      }}
      validateOnChange={false}
      validateOnBlur={false}
      validate={validation}>
      {props => {
        const [isPasswordVisible, setIsPasswordVisible] = useState(false);
        // const {values, setFieldError, handleChange, errors, handleSubmit} = Formik;
        const handleFieldUpdate = (fieldKey: string, value: string) => {
          props.setFieldError(fieldKey, undefined);
          props.handleChange(fieldKey)(value);
        };
        const togglePasswordVisible = () => {
          setIsPasswordVisible(value => !value);
        };
        return (
          <StyledViewComp alignItems={'center'}>
            <FormField
              header={'email'}
              name={'email'}
              value={props.values.email}
              placeholder={'email'}
              onChangeText={(value: string) =>
                handleFieldUpdate('email', value)
              }
              errorData={props.errors.email}
            />
            <StyledTextComp color={'red'}>{props.errors.email}</StyledTextComp>
            <FormField
              name={'Password'}
              header={'Password'}
              value={props.values.password}
              placeholder={'Password'}
              onChangeText={props.handleChange('password')}
              errorData={props.errors.password}
            />
            <StyledButtonComp
              onPress={togglePasswordVisible}
              position={'relative'}
              right={'20px'}
              bottom={isPasswordVisible ? '2px' : '0'}
              height={'30px'}>
              {isPasswordVisible ? (
                <HidePassword height={'30px'} width={'30px'} fill={'#999'} />
              ) : (
                <ShowPassword height={'30px'} width={'30px'} fill={'#999'} />
              )}
            </StyledButtonComp>
            {Object.values(passwordErrors).map(e => (
              <StyledTextComp key={e}>{e}</StyledTextComp>
            ))}
            <RegistrationButton onPress={props.handleSubmit} />
            <StyledTextComp fontSize={'11px'} margin={'20px 0 0 0'}>
              2.3.19 (202012041745) - DEBUG
            </StyledTextComp>
          </StyledViewComp>
        );
      }}
    </Formik>
  );
};
