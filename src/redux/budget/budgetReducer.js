import shortid from 'shortid';
import { combineReducers } from 'redux';
import {
  ADD_EXPENSE_ITEM,
  DELETE_EXPENSE_ITEM,
  SET_TOTAL_BUDGET,
} from './budgetTypes';

const budgetReducer = (state = 0, action) => {
  switch (action.type) {
    case SET_TOTAL_BUDGET:
      return action.payload;
    default:
      return state;
  }
};

const expenseItems = (state = [], action) => {
  switch (action.type) {
    case ADD_EXPENSE_ITEM:
      return [...state, { ...action.payload, id: shortid.generate() }];
    case DELETE_EXPENSE_ITEM:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

export default combineReducers({
  totalBudget: budgetReducer,
  expenseItems,
});
