import { IExpense } from "../../context";
import { Badge } from "../Badge/Badge";
import { DeleteButton, StyledListItem, Title } from "./style";

interface IProps {
  deleteExpense: (id: string) => void;
  expense: IExpense;
}

export const ListItem = ({ deleteExpense, expense }: IProps) => {
  const { id, body } = expense;

  return (
    <StyledListItem id={id}>
      <Title>{body}</Title>
      <Badge />
      <DeleteButton onClick={() => deleteExpense(id)} />
    </StyledListItem>
  );
};
