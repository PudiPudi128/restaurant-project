import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../features/data/DataSlice";
import { Link, NavLink } from "react-router-dom";
import EditableRestaurantList from "./EditableRestaurantList";

const ManageRestaurant = () => {
  const data = useSelector((state) => state.dataReducer.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div className=" flex items-center flex-col">
      <div className="flex justify-center items-center w-full h-[250px] bg-slate-800">
        <Link className="btn absolute top-24 right-3" to={"/restaurant/add"}>
          Add Restaurant
        </Link>
        <h1 className=" text-6xl text-white">
          <NavLink to={"/"}>Restaurant</NavLink>
        </h1>
      </div>
      <EditableRestaurantList data={data} />
    </div>
  );
};

export default ManageRestaurant;
