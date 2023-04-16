import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { singleRestaurant } from "../features/data/DataSlice";


const RestaurantList = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.dataReducer.value);

  return (
    <div className="grid grid-cols-4 gap-10 m-5">
      {data.map((item, i) => (
        <div
          className=" hover:shadow-2xl hover:scale-[102%] duration-300"
          key={i}
        >
          <Link
            to={`/restaurant/${item.id}`}
            onClick={() => dispatch(singleRestaurant(item.id))}
          >
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
      ))}
    </div>
  );
};

export default RestaurantList;
