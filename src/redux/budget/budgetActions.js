import {
  ADD_EXPENSE_ITEM,
  DELETE_EXPENSE_ITEM,
  SET_TOTAL_BUDGET,
} from './budgetTypes';

export const setTotalBudget = value => ({
  type: SET_TOTAL_BUDGET,
  payload: value,
});
export const addExpenseItem = (name, value) => ({
  type: ADD_EXPENSE_ITEM,
  payload: { name, value },
});
export const deleteExpenseItem = id => ({
  type: DELETE_EXPENSE_ITEM,
  payload: id,
});
