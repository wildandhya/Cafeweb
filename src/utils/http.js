/** @format */

import Axios from "axios";

const getProductApi = () => {
  return Axios.get("http://localhost:8000/product");
};

export default getProductApi;
