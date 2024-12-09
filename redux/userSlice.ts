import {createSlice, PayloadAction,} from "@reduxjs/toolkit";
import {Transaction, User} from "@/interfaces/interfaces";

const incomes : Transaction[]=[]
const expenses : Transaction[]=[]

const initialState:User = {
    expense: expenses,
    incomes: incomes,
    username:''
}
const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        addIncome(state,action:PayloadAction<Transaction>){
            state.incomes.push(action.payload)
        },
        addExpenses(state, action:PayloadAction<Transaction>){
            state.expense.push(action.payload)
        },
        setUsername(state, action:PayloadAction<string>){
            state.username = action.payload
        }
    }

})
export const {addIncome,addExpenses,setUsername} = UserSlice.actions;
export default UserSlice.reducer;