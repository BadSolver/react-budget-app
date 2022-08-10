import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { Cost, StyledBadge } from "./style"

interface IProps {
  cost: number
}



export const Badge = ({cost}: IProps) => {

  const {expenses} = useExpensesContext()
  const {currency} = useCurrencyContext()

  return (
    <StyledBadge>
        {/* {expenses.map((expense) => {
          return (<Cost>{currency + expense.cost}</Cost>)
        })} */}
        {cost}
    </StyledBadge>
  )
}
