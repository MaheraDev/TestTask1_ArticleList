import {ErrorsInterface, Values} from '../../types/RegistrationForm';

export enum passwordErrors {
  required = 'Required field',
  minLength = 'At least 8-long',
  isIncludesLetter = 'Must include letter',
  isIncludeDigit = 'Must include digit',
  isIncludeSymbol = 'Must include special symbol',
  twoIdentical = 'Up to two identical symbols',
}

export const Validation = (values: Values) => {
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
