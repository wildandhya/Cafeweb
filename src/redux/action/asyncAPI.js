/** @format */

import { getAllProductAction } from "../../utils/http";
import { getAllProduct } from "./actionType";

export const getAllProductCreator = () => {
  return {
    type: getAllProductAction,
    payload: getAllProduct(),
  };
};
