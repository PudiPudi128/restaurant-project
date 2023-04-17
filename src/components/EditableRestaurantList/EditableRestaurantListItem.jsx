import React from "react";
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const EditableRestaurantListItem = ({item}) => {
  return (
    <div className="border-4 border-teal-200 flex justify-between p-2">
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
  );
};

export default EditableRestaurantListItem;
