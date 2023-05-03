import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const { dispatch, currency } = useContext(AppContext);

  const changeLocation = (val) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: val,
    })
  }

  const currencyOptions = [
    { value: '$', label: 'Currency ($ Dollar)' },
    { value: '£', label: 'Currency (£ Pound)' },
    { value: '€', label: 'Currency (€ Euro)' },
    { value: '₹', label: 'Currency (₹ Ruppee)' },
  ];

  const handleChange = (event) => {
    changeLocation(event.target.value);
  };

  return (
    
    
      <select
        name="Location"
        id="Location"
        className="alert alert-success"
        style={{backgroundColor: '#2ecc71', color: 'white'}}
        value={currency}
        onChange={handleChange}
      >
        {currencyOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    
  );
};

export default Location;
