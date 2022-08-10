import { IExpense, useExpensesContext } from "../../context";
import { ListItem } from "../ListItem/ListItem";
import { Empty, EmptyText, StyledList } from "./style";

interface IProps {
  deleteExpense: (id: string) => void;
  visibleExpenses: IExpense[];
}

export const List = ({ deleteExpense, visibleExpenses }: IProps) => {
  const { expenses } = useExpensesContext();

  if (visibleExpenses.length !== 0) {
    return (
      <StyledList>
        {expenses.map((expense) => {
          return (
            <ListItem
              deleteExpense={deleteExpense}
              expense={expense}
              key={expense.id}
            />
          );
        })}
      </StyledList>
    );
  } else {
    return (
      <StyledList>
        <Empty>
          <EmptyText>Ooooops 🙈</EmptyText>
        </Empty>
      </StyledList>
    );
  }
};
