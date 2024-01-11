import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const dataApi = createAsyncThunk("data/dataApi", async () => {
  const res = await axios.get("https://fakestoreapi.com/products/");
  console.log(res.data);
  return res.data;
});

const initialState = {
  loading: false,
  dataList: [],
  cart: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(dataApi.pending, (state, action) => {
        state.loading = true;
        console.log("requseted");
      })
      .addCase(dataApi.fulfilled, (state, action) => {
        state.loading = false;
        state.dataList = action.payload;
        console.log("success");
      })
      .addCase(dataApi.rejected, (state, action) => {
        state.loading = false;
        console.log("failed");
      });
  },
});

export const { addToCart, removeFromCart } = dataSlice.actions;
export default dataSlice.reducer;
