import React from 'react';
import PropTypes from 'prop-types';
import Form from './shared/Form';
import Label from './shared/Label';
import Input from './shared/Input';
import Button from './shared/Button';

const labelStyles = `
  margin-bottom: 16px;  
`;

const BudgetForm = ({ onSubmit, budget, onChange }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Label customStyles={labelStyles}>
        Enter your total budget
        <Input type="number" value={budget} onChange={onChange} />
      </Label>

      <Button label="Save" type="submit" />
    </Form>
  );
};

BudgetForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  budget: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default BudgetForm;
