import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../features/data/DataSlice";
import { restaurantData } from "../data/RestaurantsData";

const Home = () => {
  const data = useSelector((state) => state.dataReducer.value);
  const inputSearch = useSelector((state) => state.dataReducer.searchRef);
  const dispatch = useDispatch();

  const filterSearch = () => {
    if (inputSearch) {
      const filterData = data.filter((val) => {
        if (val.city.toLowerCase() === inputSearch.toLowerCase()) {
          return val;
        }
      });
    }
  };
  useEffect(() => {
    filterSearch();
  }, [inputSearch]);

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-4 gap-10 m-5">
        {(!inputSearch)? data.map((item, i) => (
          <div
            className=" hover:shadow-2xl hover:scale-[102%] duration-300"
            key={i}
          >
            <Link to={`/restaurant/${i + 1}`}>
              <img
                src={item.images[Math.round(Math.random() * 4)]}
                alt="restaurant"
              />
              <h1 className=" text-2xl">{item.name}</h1>
              <p>{item.city}</p>
              <p>{item.price}</p>
              <p>{item.cuisine}</p>
            </Link>
          </div>
        )) : fillterData.map((item, i) => (
          <div
            className=" hover:shadow-2xl hover:scale-[102%] duration-300"
            key={i}
          >
            <Link to={`/restaurant/${i + 1}`}>
              <img
                src={item.images[Math.round(Math.random() * 4)]}
                alt="restaurant"
              />
              <h1 className=" text-2xl">{item.name}</h1>
              <p>{item.city}</p>
              <p>{item.price}</p>
              <p>{item.cuisine}</p>
            </Link>
          </div>
        ))
        }
      </div>
    </div>
  );
};

export default Home;
