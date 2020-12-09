/** @format */

import { getProductApi, addProductApi } from "../../utils/http";
// import Axios from 'axios'
import { getAllproduct, addProduct, editMenu } from "./actionType";

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

export const editMenuAction = (id, name, price, image) => {
  return {
    type: editMenu,
    payload: { id, name, price, image },
  };
};
