import { connect } from 'react-redux';
import { deleteExpenseItem } from '../../redux/budget/budgetActions';
import ExpensesTable from '../ExpensesTable';
import { getItems } from '../../redux/budget/budgetSelector';

const mapStateToProps = state => {
  return {
    items: getItems(state),
  };
};
const mapDispatchToProps = {
  onRemove: deleteExpenseItem,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpensesTable);
