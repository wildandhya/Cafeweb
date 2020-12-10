/** @format */

import Axios from "axios";

export const URL = "http://3.87.168.244:8080";

export const registerApi = (data) => {
  return Axios.post(`${URL}/register`, data);
};
export const loginApi = (email, password) => {
  return Axios.post(`${URL}/login`, {
    email: email,
    password: password,
  });
};
export const getProductApi = () => {
  return Axios.get(`${URL}/product`);
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
  return Axios.post(`${URL}/product`, data, config);
};

export const deleteProductApi = (id) => {
  return Axios.delete(`${URL}/product/${id}`);
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
  return Axios.put(`${URL}/product/${id}`, data, config);
};

export const incomeToday = () => {
  return Axios.get(`${URL}/history/income-today`);
};
export const orderByWeek = () => {
  return Axios.get(`${URL}/history/order-week`);
};
export const incomeByYear = () => {
  return Axios.get(`${URL}/history/income-year`);
};
