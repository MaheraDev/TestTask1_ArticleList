import {createSlice} from '@reduxjs/toolkit';
import {InitialSummaryPage} from './InitialSummaryPage';

const SummaryPageSlice = createSlice({
  name: 'summaryPage',
  initialState: InitialSummaryPage,
  reducers: {
    startScan: state => {
      return {
        ...state,
        isScanOn: true,
        instructionMessage: 'Stop scanning',
        errorMessage: '',
      };
    },
    stopScan: state => {
      return {
        ...state,
        isScanOn: false,
        instructionMessage: 'Pull the trigger to start scanning a barcode.',
      };
    },
    incrementCount: state => {
      return {
        ...state,
        count: state.count + 1,
        errorMessage: '',
      };
    },
    showErrorMessage: state => {
      return {
        ...state,
        isErrorMessage: true,
      };
    },
    hideErrorMessage: state => {
      return {
        ...state,
        isErrorMessage: false,
      };
    },
  },
});

export const SummaryPageReducer = SummaryPageSlice.reducer;
export const {
  startScan,
  stopScan,
  incrementCount,
  showErrorMessage,
  hideErrorMessage,
} = SummaryPageSlice.actions;
