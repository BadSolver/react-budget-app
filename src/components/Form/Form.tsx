import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../Button/Button";
import { Title } from "../Title/Title";
import { Input, StyledForm } from "./style";
import { v4 as uuidv4 } from "uuid";
import { useExpensesContext } from "../../context";

export interface IFormInput {
  name: string;
  cost: number;
}

export const Form = () => {
  const { addExpense } = useExpensesContext();
  const { register, handleSubmit, reset } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = ({ name, cost }) => {
    addExpense({
      id: uuidv4(),
      body: name,
      cost: cost,
    });
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title text="Add Expense" />
      <Input
        {...register("name", { required: "Please fill the name" })}
        type="text"
        placeholder="Enter name..."
      />
      <Input
        {...register("cost", {
          required: "Please fill the cost",
          valueAsNumber: true,
        })}
        type="number"
        placeholder="Enter cost..."
      />
      <Button />
    </StyledForm>
  );
};
