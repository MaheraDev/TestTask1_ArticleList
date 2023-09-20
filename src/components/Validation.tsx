import * as Yup from 'yup';

export const RegistrationSchema = Yup.object().shape({
  email: Yup.string().email('Incorrect Email').required('Required field'),
});
