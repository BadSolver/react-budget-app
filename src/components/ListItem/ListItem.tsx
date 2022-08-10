import { Badge } from "../Badge/Badge";
import { IExpense, useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { DeleteButton, StyledListItem, Title } from "./style";
import { Expenses } from "../Expenses/Expenses";

interface IProps {
  deleteExpense: (id: string) => void;
  expense: IExpense;
  text: string
}

export const ListItem = ({ deleteExpense, expense, text }: IProps) => {
  
  const {body, id, cost} = expense
  
  return (
    <StyledListItem id={id}>
      <Title>{text}</Title>
      <Badge cost={cost}/>
      <DeleteButton onClick={() => deleteExpense(id)}/>
    </StyledListItem>
  );
};
