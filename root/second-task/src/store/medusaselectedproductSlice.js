import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: 0,
  pheading: "",
  pname: "",
  discount: 0,
  price: 0,
  pthumbLink: "",
  description: "",
  options: [],
  info: {},
  route: "",
  collection: ""
};

const medusaselectedproductSlice = createSlice({
  name: 'medusaSelectedProduct',
  initialState,
  reducers: {
    setMedusaSelectedProduct: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearMedusaSelectedProduct: () => initialState,
  },
});

export const {
  setMedusaSelectedProduct,
  clearMedusaSelectedProduct,
} = medusaselectedproductSlice.actions;
export default medusaselectedproductSlice.reducer;
