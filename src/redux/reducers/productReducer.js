/** @format */

import {
  getAllProduct,
  pending,
  fulfilled,
  rejected,
} from "../action/actionType";

const initialState = {
  data: [],
  error: "",
  isPanding: false,
  isFulfilled: false,
  isRejected: false,
};

export const getProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case getAllProduct + pending:
      return {
        ...state,
        isPending: true,
      };
    case getAllProduct + rejected:
      return {
        ...state,
        isRejected: true,
        error: payload,
        isPending: false,
      };
    case getAllProduct + fulfilled:
      return {
        ...state,
        isFulfilled: true,
        data: payload.data.data,
        isPending: false,
      };
    default:
      return state;
  }
};
