import React from 'react';

import {Header} from '../components/Header/Header';
import {SecondHeader} from '../components/SecondHeader/SecondHeader';
import {useRoute} from '@react-navigation/native';
import {CartonsList} from '../components/CartonsList/CartonsList';
import {UserNameInput} from '../components/UIComponents/UserNameInput';
import {PasswordInput} from '../components/UIComponents/PasswordInput';
import {RegistrationButton} from '../components/UIComponents/RegistrationButton';
import {StyledViewComp} from '../components/SimpleComponents/StyledViewComp';
import {ForgotPassword} from '../components/UIComponents/ForgotPassword';
import {StyledTextComp} from '../components/SimpleComponents/StyledTextComp';
export const CartonsScreen = () => {
  const route = useRoute();
  const currentScreen = route.name;
  return (
    <>
      <Header currentScreen={currentScreen} />
      <SecondHeader currentScreen={currentScreen} />
      <CartonsList />
    </>
  );
};
