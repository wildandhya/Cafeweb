/** @format */

import { getProductApi, addProductApi } from "../../utils/http";
// import Axios from 'axios'
import { getAllproduct, addProduct } from "./actionType";

export const fetchProduct = () => {
  return {
    type: getAllproduct,
    payload: getProductApi(),
  };
};

export const addProductAction = (menu, image, price, category_id) => {
  return {
    type: addProduct,
    payload: addProductApi(menu, image, price, category_id),
  };
};
