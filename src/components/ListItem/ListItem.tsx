import { Badge } from "../Badge/Badge";
import { Icons, StyledListItem, Title } from "./style";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";

interface IProps {
  text: string;
  cost: number;
}

export const ListItem = ({ text, cost }: IProps) => {
  const { expenses } = useExpensesContext();

  return (
    <StyledListItem>
      <Title>{text}</Title>
      <Badge cost={cost}></Badge>
      <Icons></Icons>
    </StyledListItem>
  );
};
