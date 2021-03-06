import React, {createContext, useReducer} from 'react';
import AppReducer from "./AppReducer"

//Initial State
const initialState = {
    transactions:[
        {id:1, text:"Flower", amount:  20 },
        {id:2, text:"Salary", amount:  2000 },
        {id:3, text:"Books", amount:  -10 },
        {id:4, text:"Camaera", amount:  -100 },
    ]
}

//Create Context
 export const GlobalContext = createContext(initialState);


//Provider Component
export const GlobalProvider = ({children}) =>{
     const [state, dispatch] = useReducer(AppReducer, initialState);


//Actions
function deleteTransaction(id){
    dispatch({
        type:"DELETE_TRANSACTOION",
        payload: id,
    })
}

return(<GlobalContext.Provider 
    value={{transactions: state.transactions, deleteTransaction,
    }}>
        {children}
    </GlobalContext.Provider>)
 }