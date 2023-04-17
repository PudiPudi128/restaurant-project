import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";

const SearchData = () => {
  const [filterData, setFilterData] = useState(null);
  const data = useSelector((state) => state.dataReducer.value);
  let [searchParams, setSearchParams] = useSearchParams();

  const doFilterToData = () => {
    const cityQuery = searchParams.get("city");
    setFilterData(
      data.filter((val) => val.city.toLowerCase() == cityQuery.toLowerCase())
    );
  };

  useEffect(() => {
    doFilterToData();
  }, [searchParams]);
  return <div className="grid grid-cols-4 gap-10 m-5">
    {filterData && filterData.map((item,i) => (
      <div
      className=" hover:shadow-2xl hover:scale-[102%] duration-300"
      key={i}
    >
      <Link
        to={`/restaurant/${item.id}`}
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
  </div>;
};

export default SearchData;
