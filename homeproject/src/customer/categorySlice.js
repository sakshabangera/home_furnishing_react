import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: []
  
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    fetchCategorySuccess(state, action) {
      state.category=[...action.payload];
    },
  },
});

export const fetchCategory = () => async(dispatch) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/category/",{
      method:'GET'
    });

    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    dispatch(fetchCategorySuccess(data.category));
    console.log(data);
    
    
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
};

// Exporting actions and reducers
export const { fetchCategorySuccess } = categorySlice.actions;
export const CategoryReducers = categorySlice.reducer;
