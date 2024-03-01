import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  
};

export const productSlice = createSlice({
  name: 'products',
  initialState:initialState,
  reducers: {
    fetchProductsSuccess(state, action) {
      state.products = [...action.payload];
    },
  },
});

export const fetchProducts = (categoryName) => async(dispatch) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/product/${categoryName}/`,{
      method:'GET'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    dispatch(fetchProductsSuccess(data.data));
    console.log(data);
    
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
};


// Exporting actions and reducers
export const { fetchProductsSuccess } = productSlice.actions;
export const ProductReducers = productSlice.reducer;
