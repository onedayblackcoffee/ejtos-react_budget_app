import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import ExpenseTotal from './components/ExpenseTotal';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';
import Remaining from './components/Remaining';

//Code to import Budget.js


// Add code to import the other components here under

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {/* Add Budget component here under */}        
                        <Budget />
                        {/* Add Remaining component here under */}        
                        <Remaining/ >
                        {/* Add ExpenseTotal component here under */}        
                        <ExpenseTotal />
                        {/* Add ExpenseList component here under */}         
                        <ExpenseList />
                        {/* Add ExpenseItem component here under */}        
                        <ExpenseItem />
                        {/* Add AllocationForm component here under */}        
                        <AllocationFrom />
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
