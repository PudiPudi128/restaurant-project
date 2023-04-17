import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { setData, setSearchRef } from "../features/data/DataSlice";
import {AiOutlineMenu} from "react-icons/ai"
import { restaurantData } from "../data/RestaurantsData";

const Navbar = () => {
  const searchRef = useRef();
  const nevigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center items-center w-full h-[200px] bg-slate-800">
      <div className="dropdown dropdown-end absolute top-1 right-1">
        <label tabIndex={0} className="btn bg-slate-950 m-1 text-2xl">
        <AiOutlineMenu/>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link to={"/restaurant/add"}>Add Restaurant</Link>
          </li>
          <li>
          <Link to={"/restaurant/manage"}>Manage Restaurant</Link>
          </li>
        </ul>
      </div>
      <button
        onClick={() => {
          nevigate("/"), dispatch(setSearchRef());
        }}
        className="pb-3 text-2xl text-white"
      >
        Find your table for any occasion
      </button>
      <div className="form-control">
        <div className="input-group">
          <input
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                nevigate("/search?city=");
                setSearchParams({ city: searchRef.current.value });
                dispatch(setSearchRef(searchRef.current.value));
                searchRef.current.value = "";
              }
            }}
            ref={searchRef}
            type="text"
            placeholder="Search…"
            className="input input-bordered w-[500px]"
          />
          <button
            className="btn btn-error ms-3"
            onClick={() => {
              nevigate("/search?city=");
              setSearchParams({ city: searchRef.current.value });
              dispatch(setSearchRef(searchRef.current.value));
              searchRef.current.value = "";
            }}
          >
            Lets go
          </button>
        </div>
      </div>
      <button className="btn mt-4" onClick={() => dispatch(setData(restaurantData))}>
        Reset LocalStorage
      </button>
    </div>
  );
};

export default Navbar;
