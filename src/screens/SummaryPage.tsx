import React from 'react';

import {StyledViewComp} from '../components/SimpleComponents/StyledViewComp';
import {StyledTextComp} from '../components/SimpleComponents/StyledTextComp';
import Radio from '../images/Header/Radio.svg';
import {SummaryReadingButton} from '../components/UIComponents/SummaryReadingButton';

type Props = {};
export const SummaryPage: React.FC<Props> = () => {
  const buttonText = 'Pull the trigger to stop reading';
  return (
    <StyledViewComp
      alignItems={'center'}
      justifyContent={'space-between'}
      height={'100%'}>
      <StyledViewComp alignItems={'center'}>
        <StyledTextComp color={'rgb(20 40 60)'} fontSize={'160px'}>7</StyledTextComp>
        <Radio color={'rgb(20 40 60)'} height={'160px'} width={'240px'} />
        <StyledTextComp fontSize={'30px'}>Reading RFID...</StyledTextComp>
      </StyledViewComp>
      <SummaryReadingButton textContent={buttonText} />
    </StyledViewComp>
  );
};
