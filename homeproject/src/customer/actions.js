import { createAction } from '@reduxjs/toolkit';

export const loginform = createAction('user/login');
export const registration=createAction('user/register');
export const products=createAction('user/product');
export const category=createAction('user/category');
export const cart=createAction('user/cart');
