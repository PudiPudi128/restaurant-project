import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getData, singleRestaurant } from "../features/data/DataSlice";
import SearchData from "./SearchData";
import RestaurantList from "./RestaurantList";


const Home = () => {
  const [filterData, setFilterData] = useState();
  const {value, searchRef} = useSelector((state) => state.dataReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        {value?.length > 0 && !searchRef && <RestaurantList/>}
          {searchRef && <SearchData/>}
      </div>
    </div>
  );
};

export default Home;
