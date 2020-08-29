/** @format */

import getProductApi from "../../utils/http";
import { getAllProduct } from "./actionType";

export const fetchProduct = () => {
  return {
    type: getAllProduct,
    payload: getProductApi(),
  };
};
