/** @format */

import Axios from "axios";

export const registerApi = (data) => {
  return Axios.post("http://localhost:8000/register", data);
};
export const loginApi = (email, password) => {
  return Axios.post("http://localhost:8000/login", {
    email: email,
    password: password,
  });
};
export const getProductApi = () => {
  return Axios.get("http://localhost:8000/product");
};

export const addProductApi = (menu, image, price, category_id) => {
  let data = new FormData();
  data.append("menu", menu);
  data.append("image", image);
  data.append("price", price);
  data.append("category_id", category_id);

  const config = {
    headers: {
      "content-type": "multipart/form-data",
      // "x-access-token":
      // "Bearer toke",
    },
  };
  return Axios.post("http://localhost:8000/product", data, config);
};

export const deleteProductApi = (id) => {
  return Axios.delete(`http://localhost:8000/product/${id}`);
};
export const updateProductApi = (id, menu, image, price) => {
  let data = new FormData();
  data.append("menu", menu);
  data.append("image", image);
  data.append("price", price);
  const config = {
    headers: {
      "content-type": "multipart/form-data",
      // "x-access-token":
      // "Bearer toke",
    },
  };
  return Axios.put(`http://localhost:8000/product/${id}`, data, config);
};

export const incomeToday = () => {
  return Axios.get("http://localhost:8000/history/income-today");
};
export const orderByWeek = () => {
  return Axios.get("http://localhost:8000/history/order-week");
};
export const incomeByYear = () => {
  return Axios.get("http://localhost:8000/history/income-year");
};
