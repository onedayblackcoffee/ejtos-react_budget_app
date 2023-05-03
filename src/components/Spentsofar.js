import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Spentsofar = () => {
    const { expenses, currency} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.cost));
        // return (total += (item.unitprice * item.quantity));
    }, 0);
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {currency}{totalExpenses}</span>
        </div>
    );
};
export default Spentsofar;