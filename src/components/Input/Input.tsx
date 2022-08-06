import { StyledInput } from "./style"

interface IProps {
    placeholder: string
}

export const Input = ({placeholder}: IProps) => {
  return (
    <StyledInput placeholder={placeholder}/>
  )
}
