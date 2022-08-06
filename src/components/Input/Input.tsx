import { ChangeEvent, useState } from "react"
import { useExpensesContext } from "../../context"
import { StyledInput } from "./style"

interface IProps {
    placeholder: string
}

export const Input = ({placeholder}: IProps) => {
  const {expenses, setExpenses} = useExpensesContext()
  const [newExpense, setNewExpense] = useState('')

  const handleNewExpanse = (event : ChangeEvent<HTMLInputElement>) => {
    setNewExpense(event.target.value)
    setExpenses({
      id: 9,
      body: event.target.value,
      cost: 200
    })
  }

  return (
    <>
       <StyledInput placeholder={placeholder} value={newExpense} onChange={handleNewExpanse}/>
    </>
  )
}
