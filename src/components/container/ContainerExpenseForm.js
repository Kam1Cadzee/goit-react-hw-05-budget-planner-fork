import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpenseItem } from '../../redux/budget/budgetActions';
import ExpenseForm from '../ExpenseForm';

class ContainerExpenseForm extends React.Component {
  state = {
    name: '',
    amount: 0,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { onSave } = this.props;
    const { name, amount } = this.state;
    onSave(name, +amount);

    this.setState({ name: '', amount: 0 });
  };

  render() {
    const { name, amount } = this.state;
    return (
      <ExpenseForm
        name={name}
        amount={+amount}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
      />
    );
  }
}
ContainerExpenseForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default connect(
  null,
  { onSave: addExpenseItem },
)(ContainerExpenseForm);
