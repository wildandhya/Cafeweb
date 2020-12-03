/** @format */

import Axios from "axios";



export const registerApi = () => {
  return Axios.post("http://localhost:8000/register");
};
export const loginApi = () => {
  return Axios.post("http://localhost:8000/login");
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

export const incomeToday = () => {
  return Axios.get("http://localhost:8000/history/income-today");
};
export const orderByWeek = () => {
  return Axios.get("http://localhost:8000/history/order-week");
};
export const incomeByYear = () => {
  return Axios.get("http://localhost:8000/history/income-year");
};
