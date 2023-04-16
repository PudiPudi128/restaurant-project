import { createSlice } from "@reduxjs/toolkit";
import { restaurantData } from "../../data/RestaurantsData";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    value: [],
    searchRef: "",
  },
  reducers: {
    setData: (state, action) => {
      // console.log(action.payload);
      state.value = action.payload;
      // console.log(state.value);
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
      localStorage.setItem(
        "restaurants-search",
        JSON.stringify(state.searchRef)
      );
    },
    getSearchRef: (state, action) => {
      state.searchRef = JSON.parse(localStorage.getItem("restaurants"));
    },
    singleRestaurant: (state, action) => {
      const id = action.payload;
      const restaurants = JSON.parse(localStorage.getItem("restaurants"));
      const filterRestaurant = restaurants.find(
        (restaurant) => restaurant.id === parseInt(id)
      );
      state.value = filterRestaurant;
    },
  },
});

export const {
  setData,
  getData,
  updateData,
  deleteData,
  setSearchRef,
  getSearchRef,
  singleRestaurant,
} = dataSlice.actions;

export default dataSlice.reducer;
