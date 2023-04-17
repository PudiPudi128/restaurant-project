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
    addData: (state, action) => {
      state.value = JSON.parse(localStorage.getItem("restaurants"));
      state.value = [...state.value, action.payload];
      state.value[state.value.length-1].images = (state.value[state.value.length-1].images).split(',');
      state.value[state.value.length-1].id = state.value.length;
      state.value[state.value.length-1].created_at = Date.now();
      localStorage.setItem("restaurants", JSON.stringify(state.value));
    },
    setSearchRef: (state, action) => {
      state.searchRef = action.payload;
      localStorage.setItem(
        "restaurants-search",
        JSON.stringify(state.searchRef)
      );
    },
    getSearchRef: (state, action) => {
      state.searchRef = JSON.parse(localStorage.getItem("restaurants-search"));
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
  addData,
} = dataSlice.actions;

export default dataSlice.reducer;
