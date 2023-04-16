import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singleRestaurant } from "../features/data/DataSlice";

const RestaurantPage = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.dataReducer.value);
  const dispatch = useDispatch();
  console.log(data);
  console.log(id);

  // useEffect(() => {
  //   dispatch(singleRestaurant(id))
  // },[])

  return (
    <div className=" flex items-center flex-col">
      <div className="flex flex-col justify-center items-center w-full h-[250px] bg-slate-800">
        <h1 className=" text-6xl text-white">
          {data.name} Restaurant ({data.city})
        </h1>
      </div>
      <div className=" container">
        <div className="flex items-start border-b-2">
          <p className="p-2">Overview</p>
          <p className="p-2">Menu</p>
        </div>
        <div className=" flex justify-start items-center h-[150px] border-b-2 ps-4">
          <h1 className="text-5xl font-extrabold">{data.name}</h1>
        </div>
        <div className=" border-b-2 p-2">
          {data.description}
          <p className=" pt-10 pb-1 font-bold text-2xl">4 photos</p>
        </div>
        <div className="grid grid-cols-4 gap-10 m-5">
          <img src={data.images[0]} alt="image restautrant 1" />
          <img src={data.images[1]} alt="image restautrant 2" />
          <img src={data.images[2]} alt="image restautrant 3" />
          <img src={data.images[3]} alt="image restautrant 4" />
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
