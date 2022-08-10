import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useSpent } from "../../hooks/useSpent";
import { RemainingTitle } from "../CardRemaining/style";
import { StyledCardSpent } from "./style";

export const CardSpent = () => {
  const { currency } = useCurrencyContext();
  const  spentA  = useSpent()
 
  return (
    <StyledCardSpent>
      <RemainingTitle>Spent so far: {currency + spentA} </RemainingTitle>
    </StyledCardSpent>
  );
};
