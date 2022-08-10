import { IExpense, useExpensesContext } from "../../context/ExpensesContext/ExpensesContext"
import { ListItem } from "../ListItem/ListItem"
import { Empty, EmptyText, StyledList } from "./style"

interface IProps {
  deleteExpense: (id: string) => void
}

export const List = ({deleteExpense}: IProps) => {

  const {expenses} = useExpensesContext()


  if(expenses) {
    return (<StyledList>
              {expenses.map((expense) => {
                return (<ListItem deleteExpense={deleteExpense} expense={expense} text='sdkjsdhfhsdf'/>)
              })}
              
            </StyledList>)
  } else {
    return (
      <StyledList>
          <Empty> 
            <EmptyText>Ooooops 🙈</EmptyText>
          </Empty>   
      </StyledList>
    )
  }

  
}
