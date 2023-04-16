import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const RestaurantPage = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.dataReducer.value);
  console.log(data);
  return (
    <div className=" flex items-center flex-col">
      <div className="flex flex-col justify-center items-center w-full h-[250px] bg-slate-800">
        <h1 className=" text-6xl text-white">
          {data[id].name} Restaurant ({data[id].city})
        </h1>
      </div>
      <div className=" container">
        <div className="flex items-start border-b-2">
          <p className="p-2">Overview</p>
          <p className="p-2">Menu</p>
        </div>
        <div className=" flex justify-start items-center h-[150px] border-b-2 ps-4">
          <h1 className="text-5xl font-extrabold">{data[id].name}</h1>
        </div>
        <div className=" border-b-2 p-2">
          {data[id].description}
          <p className=" pt-10 pb-1 font-bold text-2xl">4 photos</p>
        </div>
        <div className="grid grid-cols-4 gap-10 m-5">
          <img src={data[id].images[0]} alt="image restautrant 1" />
          <img src={data[id].images[1]} alt="image restautrant 2" />
          <img src={data[id].images[2]} alt="image restautrant 3" />
          <img src={data[id].images[3]} alt="image restautrant 4" />
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
