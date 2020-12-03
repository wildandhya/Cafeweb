/** @format */

import { loginApi, registerApi } from "../../utils/http";
// import Axios from 'axios'
import { register, login } from "./actionType";

export const registerAction = (data) => {
  return {
    type: register,
    payload: registerApi(data),
  };
};

export const loginAction = (menu, image, price, category_id) => {
  return {
    type: login,
    payload: loginApi(menu, image, price, category_id),
  };
};
