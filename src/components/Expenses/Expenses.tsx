import { useExpensesContext } from '../../context/ExpensesContext/ExpensesContext'
import { List } from '../List/List'
import { Search } from '../Search/Search'
import { Title } from '../Title/Title'
import { StyledExpenses } from './style'

export const Expenses = () => {

  const {deleteExpense} = useExpensesContext()

  return (
    <StyledExpenses>
        <Title text='Expenses'></Title>
        <Search />
        <List deleteExpense={deleteExpense}/>
    </StyledExpenses>
  )
}
