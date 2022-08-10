import { useCurrencyContext, useExpensesContext } from "../../context";
import { Cost, StyledBadge } from "./style";

export const Badge = () => {
  const { expenses } = useExpensesContext();
  const { currency } = useCurrencyContext();

  return (
    <StyledBadge>
      {expenses.map((expense) => {
        return <Cost>{currency + expense.cost}</Cost>;
      })}
    </StyledBadge>
  );
};
