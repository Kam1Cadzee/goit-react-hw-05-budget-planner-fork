import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setTotalBudget } from '../../redux/budget/budgetActions';
import BudgetForm from '../BudgetForm';

class ContainerBudgetForm extends React.Component {
  state = { budget: 0 };

  handleChange = e => {
    this.setState({
      budget: +e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { onSave } = this.props;
    const { budget } = this.state;
    onSave(budget);

    this.setState({ budget: 0 });
  };

  render() {
    const { budget } = this.state;
    return (
      <BudgetForm
        budget={budget}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
      />
    );
  }
}
ContainerBudgetForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};
export default connect(
  null,
  { onSave: setTotalBudget },
)(ContainerBudgetForm);
