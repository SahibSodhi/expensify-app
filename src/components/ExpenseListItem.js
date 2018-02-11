import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { removeExpense } from '../actions/expenses';
import moment from 'moment';

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => (
  <div>
    <h3>
      <Link to={'/edit/' + id}>{description}</Link>
    </h3>
    <p> 
      ₹{amount} - {moment(createdAt).format('Do MMM,YYYY')}
    </p>
    <button onClick={e => dispatch(removeExpense({ id }))}>Delete</button>
    <br />
  </div>
);

export default connect()(ExpenseListItem);
