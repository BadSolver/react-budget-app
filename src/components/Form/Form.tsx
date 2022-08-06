import { Button } from "../Button/Button"
import { Input } from "../Input/Input"
import { Title } from "../Title/Title"
import { StyledForm } from "./style"

export const Form = () => {
  return (
    <StyledForm> 
        <Title text="Add Expense"/>
        <Input placeholder='enter name ...'/>
        <Input placeholder='enter cost ...'/>
        <Button />
    </StyledForm>

  )
}
