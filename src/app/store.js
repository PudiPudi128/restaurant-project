import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/data/DataSlice";

export default configureStore({
  reducer: {
    dataReducer
  },
});
