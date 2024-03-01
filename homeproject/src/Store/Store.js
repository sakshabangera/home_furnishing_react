import { configureStore } from '@reduxjs/toolkit';
import {LoginReducers} from './customer/loginSlice';
import {ProductReducers} from './customer/productSlice'
import { CategoryReducers } from '../customer/categorySlice';
import { productSlice } from '../customer/productSlice';
import {categorySlice} from '../customer/categorySlice';
import { loginSlice } from '../customer/loginSlice';
import { cartSlice } from '../customer/cartSlice';
import { registerSlice } from '../customer/registrationSlice';
import { InvoiceSlice } from '../customer/InvoiceSlice';

const store = configureStore({
  reducer: {
    register: registerSlice.reducer,
    auth: loginSlice.reducer,
    products: productSlice.reducer,
    category: categorySlice.reducer,
    cart: cartSlice.reducer,
    invoices: InvoiceSlice.reducer,
  },
});

export default store;