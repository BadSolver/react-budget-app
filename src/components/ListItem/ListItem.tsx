import { Badge } from "../Badge/Badge"
import { Icons, StyledListItem, Title } from "./style"
import close from '../../assets/icons/close.svg'
<<<<<<< HEAD
import { useExpensesContext } from "../../context"
=======
>>>>>>> 92cc0b2b59a6a1ba65fa3abc0b79a9cfb6eb7b4e

interface IProps {
    text: string,
    cost: number
}

export const ListItem = ({text, cost}: IProps) => {
<<<<<<< HEAD

  const {expenses} = useExpensesContext()

  return (
        <>

          {expenses.map((expense) => {
            return <StyledListItem>
              <Title>
                <p>{expense.body}</p>
              </Title>
              <Badge cost={expense.cost}></Badge>
              <Icons src={close}></Icons>
            </StyledListItem>
          })}

        {/* <Title> {text}</Title>
        <Badge cost={cost}></Badge>
        <Icons src={close}></Icons> */}
    </>
=======
  return (
    <StyledListItem>
        <Title>{text}</Title>
        <Badge cost={cost}></Badge>
        <Icons src={close}></Icons>
    </StyledListItem>
>>>>>>> 92cc0b2b59a6a1ba65fa3abc0b79a9cfb6eb7b4e
  )
}
