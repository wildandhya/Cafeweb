/** @format */

import Axios from "axios";

const rootPath = "http://localhost:8000";

const Get = (path) => {
  const promise = new Promise((resolve, reject) => {
    Axios.get(`${rootPath}/${path}`).then(
      (result) => {
        resolve(result.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
  return promise;
};

const getProductItem = () => Get("product");

const API = {
  getProductItem,
};

export default API;
