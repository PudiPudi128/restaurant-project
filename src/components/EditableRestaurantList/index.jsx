import React from "react";
import EditableRestaurantListItem from "./EditableRestaurantListItem";

const EditableRestaurantList = ({ data }) => {
  console.log(data);
  return (
    <div className=" container mx-auto mt-2">
      {data && data.map((item) => (
          <EditableRestaurantListItem item={item} key={item.id} data={data}/>
        ))}
    </div>
  );
};

export default EditableRestaurantList;
