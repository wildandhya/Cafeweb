/** @format */

import {
  incomeByDay,
  orderWeek,
  incomeYear,
  pending,
  fulfilled,
  rejected,
} from "../action/actionType";

const initialState = {
  data: [],
  error: "",
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

const historyReducer = (prevState = initialState, { type, payload }) => {
  switch (type) {
    case incomeByDay + pending:
      return {
        ...prevState,
        isPending: true,
      };

    case incomeByDay + rejected:
      return {
        ...prevState,
        isRejected: true,
        error: payload,
        isPending: false,
      };
    case incomeByDay + fulfilled:
      return {
        ...prevState,
        isFullfilled: true,
        data: payload.data.data,
        isPending: false,
      };
    case orderWeek + pending:
      return {
        ...prevState,
        isPending: true,
      };
    case orderWeek + rejected:
      return {
        ...prevState,
        isRejected: true,
        error: payload,
        isPending: false,
      };
    case orderWeek + fulfilled:
      return {
        ...prevState,
        isFullfilled: true,
        data: payload.data.data,
        isPending: false,
      };
    case incomeYear + pending:
      return {
        ...prevState,
        isPending: true,
      };
    case incomeYear + rejected:
      return {
        ...prevState,
        isRejected: true,
        error: payload,
        isPending: false,
      };
    case incomeYear + fulfilled:
      return {
        ...prevState,
        isFullfilled: true,
        data: payload.data.data,
        isPending: false,
      };
    default:
      return prevState;
  }
};

export default historyReducer;
