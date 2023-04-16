import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setSearchRef } from "../features/data/DataSlice";

const Navbar = () => {
  const searchRef = useRef();
  const nevigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center items-center w-full h-[200px] bg-slate-800">
      <h1 className="pb-3 text-2xl text-white">
        Find your table for any occasion
      </h1>
      <div className="form-control">
        <div className="input-group">
          <input
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                // nevigate(`/search?city=${searchRef.current.value}`);
                setSearchParams({ city: "\""+searchRef.current.value +"\"" });
                console.log(searchRef.current.value);
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
            onClick={() => nevigate(`/search?city=${searchRef.current.value}`)}
          >
            Lets go
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
