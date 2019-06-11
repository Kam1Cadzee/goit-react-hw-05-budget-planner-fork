import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpensesTable from './container/ContainerExpensesTable';
import Values from './container/ContainerValues';
import ContainerBudgetForm from './container/ContainerBudgetForm';
import ContainerExpenseForm from './container/ContainerExpenseForm';
import { getItemsLength } from '../redux/budget/budgetSelector';

const Container = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  width: 1000px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const App = ({ length }) => {
  return (
    <Container>
      <ContainerBudgetForm />
      <Values />
      <ContainerExpenseForm />
      {length > 0 && <ExpensesTable />}
    </Container>
  );
};
App.propTypes = {
  length: PropTypes.number.isRequired,
};
const mapStateToProps = state => ({ length: getItemsLength(state) });
export default connect(mapStateToProps)(App);
