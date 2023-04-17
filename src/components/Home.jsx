import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getData, getSearchRef } from "../features/data/DataSlice";
import SearchData from "./SearchData";
import RestaurantList from "./RestaurantList";


const Home = () => {
  const { value, searchRef } = useSelector((state) => state.dataReducer);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getData(), getSearchRef());
  }, []);

  return (
    <div>
      <Navbar />
      {value?.length > 0 && !searchRef && <RestaurantList />}
      {searchRef && <SearchData />}
    </div>
  );
};

export default Home;
