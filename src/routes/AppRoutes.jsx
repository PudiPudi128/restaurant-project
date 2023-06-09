import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "../components/Home";
import Layout from "../layout/Layout";
import NotFound404 from "../layout/NotFound404";
import RestaurantPage from "../components/RestaurantPage";
import Addrestaurant from "../components/Addrestaurant";
import ManageRestaurant from "../components/ManageRestaurant";
import UpdateRestaurant from "../components/UpdateRestaurant";
import { useDispatch } from "react-redux";
import { setData } from "../features/data/DataSlice";
import { restaurantData } from "../data/RestaurantsData";

const AppRoutes = () => {
  const dispatch = useDispatch();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<Home />} />
          <Route path="/restaurant/:id" element={<RestaurantPage />} />
          <Route path="/restaurant/add" element={<Addrestaurant />} />
          <Route path="/restaurant/manage" element={<ManageRestaurant />} />
          <Route path="/restaurant/manage/update/:id" element={<UpdateRestaurant />} />
          <Route path="/resetDB" element={<NavLink className="btn" to={"/"} onClick={() => dispatch(setData(restaurantData))}>resetDataBase</NavLink>} />
        </Route>
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
