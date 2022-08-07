import { createContext, FC, ReactNode, useContext, useState } from "react";

interface IExpense {
    id: number,
    body: string,
    cost: number
}

interface IExpensesContext {
    expenses: IExpense[]
} 

export const ExpensesContext = createContext<IExpensesContext>({
    expenses: []
})

export const useExpensesContext = () => useContext<IExpensesContext>(ExpensesContext)

const useExpensesValue = () => {
    const [expensesContext, setExpensesContext] = useState<IExpensesContext>(() => {
        return {
            expenses: [],
            setExpenses: (value: IExpense) => {
                setExpensesContext((context) => {
                    return {
                        ...context,
                        expenses: [...context.expenses, value]
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