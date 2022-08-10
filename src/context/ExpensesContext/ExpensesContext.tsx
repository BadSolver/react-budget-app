import { createContext, FC, ReactNode, useContext, useState } from "react";

export interface IExpense {
    id: string,
    body: string,
    cost: number
}

interface IExpensesContext {
    expenses: IExpense[],
    addExpense: (value: IExpense) => void,
    deleteExpense: (id: string) => void
} 

export const ExpensesContext = createContext<IExpensesContext>({
    expenses: [],
    deleteExpense: (id: string) => {},
    addExpense: (value: IExpense) => {}
})

export const useExpensesContext = () => useContext<IExpensesContext>(ExpensesContext)

const useExpensesValue = () => {
    const [expensesContext, setExpensesContext] = useState<IExpensesContext>(() => {
        return {
            expenses: [],
            addExpense: (value: IExpense) => {
                setExpensesContext((context) => {
                    return {
                        ...context,
                        expenses: [...context.expenses, value]
                    }
                })
            },
            deleteExpense: (id: string) => {
                setExpensesContext((context) => {
                    return {
                        ...context,
                        expenses: context.expenses.filter((expense) => expense.id !== id)
                    }
                })
            }
        }
    })
    return expensesContext
}

export const ExpensesProvider: FC<{children: ReactNode}> = ({children}) => {
    return (
        <ExpensesContext.Provider value={useExpensesValue()}>
            {children}
        </ExpensesContext.Provider>
    )
}