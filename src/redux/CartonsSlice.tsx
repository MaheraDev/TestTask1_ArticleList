import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InitialCartonsList} from './InitialCartonsList';

const cartonsListSlice = createSlice({
  name: 'cartonsList',
  initialState: InitialCartonsList,
  reducers: {
    removeCarton: (cartonsState, action: PayloadAction<string>) =>
      cartonsState.filter(carton => carton.barcode !== action.payload),
    setCartonsListOrder: (cartonsState, action) => {
      return action.payload;
    },
  },
});

export const CartonsListReducer = cartonsListSlice.reducer;
export const {removeCarton, setCartonsListOrder} = cartonsListSlice.actions;
