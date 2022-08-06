import { Badge } from "../Badge/Badge"
import { Icons, StyledListItem, Title } from "./style"
import close from '../../assets/icons/close.svg'

interface IProps {
    text: string,
    cost: number
}

export const ListItem = ({text, cost}: IProps) => {
  return (
    <StyledListItem>
        <Title>{text}</Title>
        <Badge cost={cost}></Badge>
        <Icons src={close}></Icons>
    </StyledListItem>
  )
}
