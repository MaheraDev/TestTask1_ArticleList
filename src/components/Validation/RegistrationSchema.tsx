import * as Yup from 'yup';

const passwordErrors = {
  required: 'Required field',
  minLength: 'At least 8-long',
  isIncludesLetter: 'Must include letter',
  isIncludeDigit: 'Must include digit',
  isIncludeSymbol: 'Must include special symbol',
  twoIdentical: 'Up to two identical symbols',
};
export const errorsArray = Object.values(passwordErrors);
const {
  required,
  minLength,
  isIncludeSymbol,
  isIncludesLetter,
  isIncludeDigit,
  twoIdentical,
} = passwordErrors;

export const RegistrationSchema = Yup.object().shape({
  email: Yup.string().email('Incorrect Email').required('Required field'),
  password: Yup.string()
    .required(required)
    .min(8, minLength)
    .matches(/(?=.*[a-zA-Z])/, isIncludesLetter)
    .matches(/(?=.*[0-9])/, isIncludeDigit)
    .matches(/(?=.*[^a-zA-Z0-9])/, isIncludeSymbol)
    .matches(/^(?!.*(.).*\1.*\1)[\s\S]*$/, twoIdentical),
});
