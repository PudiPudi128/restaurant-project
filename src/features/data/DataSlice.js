import { createSlice } from "@reduxjs/toolkit";
import { restaurantData } from "../../data/RestaurantsData";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    value: restaurantData,
    searchRef: ""
  },
  reducers: {
    setData: (state, action) => {
      console.log(action.payload);
      state.value = action.payload ? action.payload : [];
      console.log(state.value);
      localStorage.setItem("restaurants", JSON.stringify(state.value));
    },
    getData: (state, action) => {
      state.value = JSON.parse(localStorage.getItem("restaurants"));
    },
    updateData: (state, action) => {},
    deleteData: (state, action) => {},
    addData: (state, action) => {},
    setSearchRef: (state, action) => {
      state.searchRef = action.payload;
      localStorage.setItem("restaurants-search", JSON.stringify(state.searchRef));
    }
  },
});

export const { setData, getData, updateData, deleteData, setSearchRef } = dataSlice.actions;

export default dataSlice.reducer;
