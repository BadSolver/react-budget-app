import { useExpensesContext } from "../../context";
import { useVisibleExpenses } from "../../hooks";
import { List } from "../List/List";
import { Search } from "../Search/Search";
import { Title } from "../Title/Title";
import { StyledExpenses } from "./style";

export const Expenses = () => {
  const { deleteExpense } = useExpensesContext();
  const { visibleExpenses } = useVisibleExpenses();

  return (
    <StyledExpenses>
      <Title text="Expenses"></Title>
      <Search />
      <List deleteExpense={deleteExpense} visibleExpenses={visibleExpenses} />
    </StyledExpenses>
  );
};
