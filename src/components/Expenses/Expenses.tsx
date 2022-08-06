import { List } from '../List/List'
import { Search } from '../Search/Search'
import { Title } from '../Title/Title'
import { StyledExpenses } from './style'

export const Expenses = () => {
  return (
    <StyledExpenses>
        <Title text='Expenses'></Title>
        <Search />
        <List />
    </StyledExpenses>
  )
}
