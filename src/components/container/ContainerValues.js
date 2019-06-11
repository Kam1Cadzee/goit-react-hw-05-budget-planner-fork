import { connect } from 'react-redux';
import Values from '../Values';

import {
  getBalance,
  getBudget,
  getExpenses,
} from '../../redux/budget/budgetSelector';

const mapStateToProps = state => {
  return {
    budget: getBudget(state),
    expenses: getExpenses(state),
    balance: getBalance(state),
  };
};

export default connect(mapStateToProps)(Values);
