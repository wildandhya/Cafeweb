/** @format */

import {
  pending,
  fulfilled,
  rejected,
  register,
  login,
  logout,
} from "../action/actionType";

const initialState = {
  user: [],
  error: "",
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  uploadMenu: null,
};

const authReducer = (prevState = initialState, { type, payload }) => {
  switch (type) {
    case register + pending:
      return {
        ...prevState,
        isPending: true,
      };

    case register + rejected:
      return {
        ...prevState,
        isRejected: true,
        error: payload,
        isPending: false,
      };
    case register + fulfilled:
      return {
        ...prevState,
        isFulfilled: true,
        user: payload.data.data,
        isPending: false,
      };
    case login + pending:
      return {
        ...prevState,
        isPending: true,
      };
    case login + rejected:
      return {
        ...prevState,
        isRejected: true,
        error: payload,
        isPending: false,
      };
    case login + fulfilled:
      return {
        ...prevState,
        isFulfilled: true,
        isPending: false,
        user: payload.data.data,
      };
    case logout:
      return {
        ...prevState,
        user: [],
      };
    default:
      return prevState;
  }
};

export default authReducer;
