import React, {useContext, useState} from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Balance = () => {
const {transactions} = useContext(GlobalContext);
const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);
const balance = transactionAmounts.reduce((acc, item)=> (acc += item), 0).toFixed(2);

    return (
        <div>
            <h3>Current Balance</h3>
            <h1 id="balance">$0.00</h1>
        </div>
    )
}
