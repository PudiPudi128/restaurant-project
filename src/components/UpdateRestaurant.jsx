import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getData, updateData } from "../features/data/DataSlice";

const UpdateRestaurant = () => {
  const [toggle, setToggle] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const data = useSelector((state) => state.dataReducer.value);
  const dispatch = useDispatch();
  const netvigate = useNavigate();
  const { id } = useParams();

  const regexAlphabetm = /^[a-zA-Z\s]+$/;
  const regexNumbers = /^[0-9]+$/;
  const regexImage = /\b(https?:\/\/\S+\.(png|jpg|jpeg|gif)\b)/i;
  const regexDescription = /^[\w\s.,!?-]{1,255}$/;

  const onSub = (_bodyData) => {
    console.log(_bodyData);
    dispatch(updateData([{ _bodyData }, { id }]));
    netvigate("/restaurant/manage");
  };

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div>
      {data[id-1] && (
        <div className=" flex items-center h-screen bg-slate-300">
          <div className="w-full max-w-md mx-auto">
            <form
              onSubmit={handleSubmit(onSub)}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  defaultValue={!toggle ? data[id-1].name : ""}
                  {...register("name", {
                    required: { value: true, message: "Name is required..." },
                    minLength: { value: 2, message: "min 2 chars..." },
                    maxLength: { value: 20, message: "max 20 chars..." },
                    pattern: {
                      value: regexAlphabetm,
                      message: "Only alphabet allowed...",
                    },
                  })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter name"
                />
                {errors.name && <span>{errors.name.message}</span>}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="city"
                >
                  City
                </label>
                <input
                  defaultValue={!toggle ? data[id-1].city : ""}
                  {...register("city", {
                    required: { value: true, message: "City is required..." },
                    minLength: { value: 2, message: "min 2 chars..." },
                    maxLength: { value: 20, message: "max 20 chars..." },
                    pattern: {
                      value: regexAlphabetm,
                      message: "Only alphabet allowed...",
                    },
                  })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="city"
                  type="text"
                  placeholder="Enter city"
                />
                {errors.city && <span>{errors.city.message}</span>}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  defaultValue={!toggle ? data[id-1].price : ""}
                  {...register("price", {
                    required: { value: true, message: "Price is required..." },
                    minLength: { value: 2, message: "min 2 chars..." },
                    maxLength: { value: 20, message: "max 20 chars..." },
                    pattern: {
                      value: regexNumbers,
                      message: "Only numbers allowed...",
                    },
                  })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="price"
                  type="text"
                  placeholder="Enter price"
                />
                {errors.price && <span>{errors.price.message}</span>}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="main_image"
                >
                  Main Image
                </label>
                <input
                  defaultValue={!toggle ? data[id-1].main_image : ""}
                  {...register("main_image", {
                    required: {
                      value: true,
                      message: "Main_image is required...",
                    },
                    minLength: { value: 20, message: "min 20 chars..." },
                    maxLength: { value: 500, message: "max 500 chars..." },
                    pattern: {
                      value: regexImage,
                      message: "Only link allowed...",
                    },
                  })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="main_image"
                  type="text"
                  placeholder="Enter main image URL"
                />
                {errors.main_image && <span>{errors.main_image.message}</span>}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="cuisine"
                >
                  Cuisine
                </label>
                <input
                  defaultValue={!toggle ? data[id-1].cuisine : ""}
                  {...register("cuisine", {
                    required: {
                      value: true,
                      message: "Cuisine is required...",
                    },
                    minLength: { value: 2, message: "min 2 chars..." },
                    maxLength: { value: 20, message: "max 20 chars..." },
                    pattern: {
                      value: regexAlphabetm,
                      message: "Only alphabet allowed...",
                    },
                  })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="cuisine"
                  type="text"
                  placeholder="Enter cuisine"
                />
                {errors.cuisine && <span>{errors.cuisine.message}</span>}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="images"
                >
                  Images
                </label>
                <input
                  defaultValue={!toggle ? data[id-1].images : ""}
                  {...register("images", {
                    required: { value: true, message: "Images is required..." },
                    minLength: { value: 20, message: "min 20 chars..." },
                    maxLength: { value: 700, message: "max 700 chars..." },
                    pattern: {
                      value: regexImage,
                      message: "Only link allowed...",
                    },
                  })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="images"
                  type="text"
                  placeholder="Enter 4 images (separated by commas)"
                />
                {errors.images && <span>{errors.images.message}</span>}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  defaultValue={!toggle ? data[id-1].description : ""}
                  {...register("description", {
                    required: {
                      value: true,
                      message: "Description is required...",
                    },
                    minLength: { value: 30, message: "min 30 chars..." },
                    maxLength: { value: 500, message: "max 500 chars..." },
                    pattern: {
                      value: regexDescription,
                      message: "Only description characters allowed...",
                    },
                  })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="description"
                  placeholder="Enter description"
                />
                {errors.description && (
                  <span>{errors.description.message}</span>
                )}
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white btn">
                  update
                </button>
                <div className=" grid gap-2">
                  <button
                    onClick={() => {
                      reset(), setToggle(true);
                    }}
                    className="bg-blue-500 hover:bg-blue-700 text-white btn"
                  >
                    clean
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white btn"
                    onClick={() => setToggle(false)}
                  >
                    reset
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateRestaurant;
