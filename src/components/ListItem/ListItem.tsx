import { Badge } from "../Badge/Badge"
import { Icons, StyledListItem, Title } from "./style"
import close from '../../assets/icons/close.svg'
import { useExpensesContext } from "../../context"


interface IProps {
    text: string,
    cost: number
}

export const ListItem = ({text, cost}: IProps) => {

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
  // return (
  //   <StyledListItem>
  //       <Title>{text}</Title>
  //       <Badge cost={cost}></Badge>
  //       <Icons src={close}></Icons>
  //   </StyledListItem>
  )
}
