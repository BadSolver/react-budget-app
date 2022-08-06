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
    <StyledListItem>
        <Title>{text}</Title>
        <Badge cost={cost}></Badge>
        <Icons src={close}></Icons>
    </StyledListItem>
  )
}
