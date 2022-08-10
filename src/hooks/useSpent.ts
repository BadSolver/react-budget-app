import { useEffect, useState } from "react"
import { useExpensesContext } from "../context/ExpensesContext/ExpensesContext"

export const useSpent = () => {
    const { expenses } = useExpensesContext()
    const totalSpent = expenses.reduce((acc, expense) => {
        return (expense.cost + acc)
    }, 0)
    const [spent, setSpent] = useState(() => {
        return totalSpent
    })
    useEffect(() => {
        setSpent(() => {
            return totalSpent
        })
    }, [expenses])
    return spent
}