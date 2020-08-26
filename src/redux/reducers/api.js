/** @format */

import {
  getAllProductAction,
  pending,
  fullfilled,
  rejected,
} from "../action/actionType";

const initialstate = {
  data: [],
  error: "",
  isPending: false,
  isRejected: false,
  isFullfilled: false,
};

export const getProductReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case getAllProductAction + pending:
      return {
        ...state,
        isPending: true,
      };
    case getAllProductAction + rejected:
      return {
        ...state,
        isRejected: true,
        error: payload,
        isPending: false,
      };
    case getAllProductAction + fullfilled:
      return {
        data: payload,
        isFullfilled: true,
        isPending: false,
      };
    default:
      return state;
  }
};
