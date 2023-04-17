import React from "react";
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteData } from "../../features/data/DataSlice";

const EditableRestaurantListItem = ({ item, data }) => {
  const dispatch = useDispatch();
  return (
    <div className="border-4 border-teal-200 flex justify-between p-2">
      <h1 className=" text-3xl p-2">{item.name}</h1>
      <div className=" flex gap-4 items-center">
        <button
          onClick={() => dispatch(deleteData(item.id))}
          className="btn btn-error text-xl"
        >
          <FaRegTrashAlt />
        </button>
        <NavLink
          className="btn btn-info text-xl"
          to={`/restaurant/manage/update/${data.indexOf(item)+1}`}
        >
          <FaPencilAlt />
        </NavLink>
      </div>
    </div>
  );
};

export default EditableRestaurantListItem;
