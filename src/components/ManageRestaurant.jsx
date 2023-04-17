import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteData,
  getData,
  updateData,
  updateId,
} from "../features/data/DataSlice";
import { FaRegTrashAlt, FaPencilAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const ManageRestaurant = () => {
  const data = useSelector((state) => state.dataReducer.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
    dispatch(updateId());
    console.log(data)
  }, []);

  return (
    <div className=" flex items-center flex-col">
      <div className="flex justify-center items-center w-full h-[250px] bg-slate-800">
        <Link className="btn absolute top-24 right-3" to={"/restaurant/add"}>Add Restaurant</Link>
        <h1 className=" text-6xl text-white"><NavLink to={"/"}>Restaurant</NavLink></h1>
      </div>
      <div className=" container mx-auto mt-2">
        {data &&
          data.map((item, i) => (
            <div
              key={i}
              className="border-4 border-teal-200 flex justify-between p-2"
            >
              <h1 className=" text-3xl p-2">{item.name}</h1>
              <div className=" flex gap-4 items-center">
                <button
                  onClick={() => {
                    dispatch(deleteData(item.id)), dispatch(updateId());
                  }}
                  className="btn btn-error text-xl"
                >
                  <FaRegTrashAlt />
                </button>
                <NavLink
                  className="btn btn-info text-xl"
                  to={`/restaurant/manage/update/${item.id}`}
                >
                  <FaPencilAlt />
                </NavLink>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ManageRestaurant;
