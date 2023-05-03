import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaMinusCircle, FaPlusCircle, FaTimesCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, currency} = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
            
        };

        dispatch({
            type: 'DELETE_EXPENSE',
            payload: item,
            cost: 0,
        });
    };

    const handleIncrease = () => {
        const item = {
            name: props.name,
            cost: parseInt(10),
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: item,
        });
    };

    const handleDecrease = () => {
        const item = {
            name: props.name,
            cost: parseInt(10),
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: item,
        });
    };

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{parseInt(props.cost)}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={handleIncrease}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={handleDecrease}></FaMinusCircle></td>
        <td><FaTimesCircle size='1.2em' color="black" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;