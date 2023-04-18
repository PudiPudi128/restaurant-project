import { createSlice } from "@reduxjs/toolkit";
import { firstLenght } from "../../data/RestaurantsData";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    value: [],
    searchRef: "",
    nextRestaurantId: firstLenght
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
    updateData: (state, action) => {
      state.value = JSON.parse(localStorage.getItem("restaurants"));
      const i = action.payload[1].id;
      const id =  state.value[i-1].id;
      console.log(id);
      state.value[i-1] = action.payload[0]._bodyData;
      state.value[i-1].id = id;
      state.value[i-1].update_at = Date.now();
      localStorage.setItem("restaurants", JSON.stringify(state.value));
    },
    deleteData: (state, action) => {
      const id = action.payload;
      const filterData = state.value.filter((val) => val.id !== id);
      state.value = filterData;
      localStorage.setItem("restaurants", JSON.stringify(state.value));
    },
    addData: (state, action) => {
      state.value = JSON.parse(localStorage.getItem("restaurants"));
      state.value = [...state.value, action.payload];
      state.value[state.value.length-1].images = (state.value[state.value.length-1].images).split(',');
      console.log(state.nextRestaurantId);
      state.value[state.value.length-1].id = state.nextRestaurantId++;
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
