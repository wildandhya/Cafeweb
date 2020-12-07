/** @format */

import {
  getAllproduct,
  pending,
  fulfilled,
  rejected,
  addProduct,
  editMenu,
} from "../action/actionType";

const initialState = {
  product: [],
  error: "",
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  uploadMenu: null,
  editItemState: {},
};

const getProductReducer = (prevState = initialState, { type, payload }) => {
  switch (type) {
    case getAllproduct + pending:
      return {
        ...prevState,
        isPending: true,
      };

    case getAllproduct + rejected:
      return {
        ...prevState,
        isRejected: true,
        error: payload,
        isPending: false,
      };
    case getAllproduct + fulfilled:
      return {
        ...prevState,
        isFulfilled: true,
        product: payload.data.data,
        isPending: false,
      };
    case addProduct + pending:
      return {
        ...prevState,
        isPending: true,
      };
    case addProduct + rejected:
      return {
        ...prevState,
        isRejected: true,
        error: payload,
        isPending: false,
      };
    case addProduct + fulfilled:
      return {
        ...prevState,
        isFulfilled: true,
        isPending: false,
        uploadMenu: true,
      };
    case editMenu:
      return {
        ...prevState,
        editItemState: {
          ...payload,
        },
      };
    default:
      return prevState;
  }
};

export default getProductReducer;
