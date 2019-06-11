import React from 'react';
import PropTypes from 'prop-types';
import Form from './shared/Form';
import Label from './shared/Label';
import Input from './shared/Input';
import Button from './shared/Button';

const labelStyles = `
  margin-bottom: 16px;  
`;

const ExpenseForm = ({ onSubmit, onChange, name, amount }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Label customStyles={labelStyles}>
        Enter expense name
        <Input type="text" name="name" value={name} onChange={onChange} />
      </Label>
      <Label customStyles={labelStyles}>
        Enter expense amount
        <Input type="number" name="amount" value={amount} onChange={onChange} />
      </Label>

      <Button label="Add" type="submit" />
    </Form>
  );
};
ExpenseForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default ExpenseForm;
