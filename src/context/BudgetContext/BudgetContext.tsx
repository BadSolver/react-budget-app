import { createContext, FC, ReactNode, useContext, useState } from "react";

interface IBudget {
    budget: number,
    changeBudget: (value: number) => void,
    addValueBudget: (value: number) => void,
    deleteValueBudget: (value: number) => void
}

export const BudgetContext = createContext<IBudget>({
    budget: 0,
    changeBudget: (value: number) => {},
    addValueBudget: (value:number) => {},
    deleteValueBudget: (value:number) => {}
})

const useBudgetValue = () => {
    const [budget, setBudget] = useState<IBudget>(() => ({
        budget: 0,
        changeBudget: (value: number) => {
            setBudget((context) => {
                return {...context, budget: value}
            })
        },
        addValueBudget: (value: number) => {
            setBudget((context) => {
                return {...context, budget: context.budget + value}
            })
        },
        deleteValueBudget: (value: number) => {
            setBudget((context) => {
                return {...context, budget: context.budget - value}
            })
        }
    }))
    return budget
}

export const useBudgetContext = () => useContext<IBudget>(BudgetContext)

export const BudgetProvider: FC<{children: ReactNode}> = ({children}) => {
    return (
        <BudgetContext.Provider value={useBudgetValue()}>
            {children}
        </BudgetContext.Provider>
    )
}