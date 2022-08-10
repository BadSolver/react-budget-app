import { useCurrencyContext } from "../../context";
import { useRemaining } from "../../hooks";
import { RemainingTitle, StyledCardRemaining } from "./style";

export const CardRemaining = () => {
  const { currency } = useCurrencyContext();
  const remaining = useRemaining();

  return (
    <StyledCardRemaining Overspend={remaining < 0}>
      <RemainingTitle>
        {remaining < 0
          ? `Overspending: ${currency + remaining * -1}`
          : `Remaining: ${currency + remaining}`}
      </RemainingTitle>
    </StyledCardRemaining>
  );
};
