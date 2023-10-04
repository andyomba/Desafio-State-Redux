import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/counter/counterSlice';
import shopSlice from '../features/shop/shopSlice';
import discountSlice from '../features/discount/discountSlice'; // Importa el discountSlice

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    shop: shopSlice,
    discount: discountSlice, // Agrega el discountSlice al objeto reducer
  },
});