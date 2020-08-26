/** @format */

import Axios from "axios";

export default function getAllProduct() {
  return Axios.get("http://localhost:8000/page?page=1&limit=9");
}
