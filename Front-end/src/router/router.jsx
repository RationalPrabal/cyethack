import { Routes, Route } from "react-router-dom";
import ListItems from "../pages/ListItems";
import SingleItem from "../pages/SingleItem";
import Register from "../pages/Register";
import Login from "../pages/Login";

export const Router = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
      <Route path="/list-items" element={<ListItems />} />
      <Route path="/list-item-details" element={<SingleItem />} />
    </Routes>
  );
};
