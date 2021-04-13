import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const AddTransaction = () => {
    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState(0);

    const{AddTransaction} = useContext(GlobalContext);

    const onSubmit = (e)=>{
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }
        
        AddTransaction(newTransaction);
        setTransactionAmount('')
    }


    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit = {onSubmit}>
                <div className ="form-control">
                    <label htmlFor="description">Description</label>
                    <input type="text" 
                    placeholder="Detial of Transaction"
                    value ={description}
                    onChange = {(e) => setDescription(e.target.value)}
                    />
                </div>
               
                <div className="form-control">
                    <label htmlFor="transcationamount">Transaction Amount</label>
                    <input type = "text"
                     placeholder = "Doler Value of Transaction"
                     value={transactionAmount}
                     onChange={(e)=> setTransactionAmount(e.target.value)}
                     />
                </div>
                <button className = "btn">Add Transaction</button>
             </form>
        </div>
    )
}
