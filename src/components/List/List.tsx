import { ListItem } from "../ListItem/ListItem"
import { StyledList } from "./style"

export const List = () => {
  return (
    <StyledList>
        <ListItem text='shoping' cost={100}/>
        <ListItem text='drinking'cost={220}/>
        <ListItem text='relax'cost={220}/>
        <ListItem text='study'cost={220}/>
    </StyledList>
  )
}
