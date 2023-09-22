import React, {useCallback, useState} from 'react';

import {StyledViewComp} from './SimpleComponents/StyledViewComp';
import {StyledTextComp} from './SimpleComponents/StyledTextComp';
import Radio from '../images/Header/Radio.svg';
import {SummaryInstructionsButton} from './UIComponents/SummaryInstructionsButton';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {
  hideErrorMessage,
  incrementCount,
  showErrorMessage,
  startScan,
  stopScan,
} from '../redux/SummaryPageSlice';
import {TimeoutId} from '@reduxjs/toolkit/dist/query/core/buildMiddleware/types';

type Props = {};
export const Summary: React.FC<Props> = () => {
  const {count, instructionMessage, isScanOn, isErrorMessage} = useAppSelector(
    state => state.summaryPage,
  );
  const [scanningInterval, setScanningInterval] = useState<TimeoutId | null>(
    null,
  );

  const dispatch = useAppDispatch();

  const handleStartScan = useCallback(() => {
    console.warn('ScanStarted');
    dispatch(startScan());
    if (!scanningInterval) {
      const intervalId = setInterval(() => {
        const randomValue = Math.random() < 0.5;
        if (randomValue) {
          dispatch(hideErrorMessage());
          dispatch(incrementCount());
        } else {
          dispatch(showErrorMessage());
        }
      }, 1000);

      setScanningInterval(intervalId);
    }
  }, [dispatch, scanningInterval]);

  const handleStopScan = useCallback(() => {
    console.warn('ScanStopped');
    dispatch(stopScan());

    if (scanningInterval) {
      clearInterval(scanningInterval);
      setScanningInterval(null);
    }
  }, [dispatch, scanningInterval]);

  return (
    <StyledViewComp
      alignItems={'center'}
      justifyContent={'space-between'}
      height={'100%'}
      flex={'1'}>
      <StyledViewComp alignItems={'center'}>
        <StyledTextComp color={'rgb(20 40 60)'} fontSize={'160px'}>
          {count}
        </StyledTextComp>
        <Radio height={'160px'} width={'240px'} />
        <StyledTextComp color={'#999'} fontSize={'30px'}>
          {isErrorMessage ? 'Invalid barcode' : 'Reading RFID...'}
        </StyledTextComp>
      </StyledViewComp>
      {isScanOn ? (
        <SummaryInstructionsButton
          textContent={instructionMessage}
          onPress={handleStopScan}
        />
      ) : (
        <SummaryInstructionsButton
          textContent={instructionMessage}
          onPress={handleStartScan}
        />
      )}
    </StyledViewComp>
  );
};
