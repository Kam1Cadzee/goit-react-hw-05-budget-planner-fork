import { createSelector } from 'reselect';

export const getItems = state => state.expenseItems;
export const getBudget = state => state.totalBudget;
export const getItemsLength = state => state.expenseItems.length;

export const getExpenses = createSelector(
  [getItems],
  items => items.reduce((acc, item) => item.value + acc, 0),
);
export const getBalance = createSelector(
  [getBudget, getExpenses],
  (budget, expenses) => budget - expenses,
);
