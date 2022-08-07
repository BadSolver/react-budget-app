import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { Cost, StyledBadge } from "./style"

interface IProps {
    cost: number;
}

export const Badge = ({cost}: IProps) => {

  const {currency} = useCurrencyContext()

  return (
    <StyledBadge>
        <Cost>{currency}{cost}</Cost>
    </StyledBadge>
  )
}
