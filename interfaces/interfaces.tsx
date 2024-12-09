export interface Transaction{
    price: number,
    date: Date,
    description: string
}

// export interface Expense extends Transaction{

// }

// export interface Income extends Transaction{

// }

export interface User{
    expense: Transaction[],
    incomes:Transaction[],
    username:string
}