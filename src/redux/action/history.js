/** @format */

import { incomeToday, orderByWeek, incomeByYear } from "../../utils/http";

import { incomeByDay, orderWeek, incomeYear } from "./actionType";

export const getIncomeToday = () => {
  return {
    type: incomeByDay,
    payload: incomeToday(),
  };
};

export const getOrderByWeek = () => {
  return {
    type: orderWeek,
    payload: orderByWeek(),
  };
};

export const getIncomeByYear = () => {
  return {
    type: incomeYear,
    payload: incomeByYear(),
  };
};
