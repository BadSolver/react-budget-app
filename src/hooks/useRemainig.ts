import { useEffect, useState } from "react";
import { useBudgetContext } from "../context/BudgetContext/BudgetContext";
import { useExpensesContext } from "../context/ExpensesContext/ExpensesContext";

export const useRemaining = () => {
    const { expenses } = useExpensesContext();
    const { budget } = useBudgetContext();
    const total = expenses.reduce((acc, expense) => {
        return (acc += expense.cost)
    }, 0)

    const [remaining, setRemaining] = useState<number>((): number => {
        return  expenses ? budget - total : budget 
    })
    useEffect(() => {
        setRemaining(() => {
            return expenses ? budget - total : budget;
        })
    }, [budget, expenses])
    return remaining
}