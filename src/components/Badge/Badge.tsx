import { Cost, StyledBadge } from "./style"

interface IProps {
    cost: number;
}

export const Badge = ({cost}: IProps) => {
  return (
    <StyledBadge>
        <Cost>${cost}</Cost>
    </StyledBadge>
  )
}
