import { useForm } from "react-hook-form";
import { IFormInput } from "../Form/Form";
import { StyledInput } from "./style";

export const Input = () => {
  const { register } = useForm<IFormInput>();

  return (
    <>
      <StyledInput
        {...register("name", { required: "Please fill the name" })}
        type="text"
        placeholder="Enter name..."
      />
      <StyledInput
        {...register("cost", {
          required: "Please fill the cost",
          valueAsNumber: true,
        })}
        type="number"
        placeholder="Enter cost..."
      />
    </>
  );
};
