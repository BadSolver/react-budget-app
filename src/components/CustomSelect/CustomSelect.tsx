import Select, { SingleValue } from "react-select";
import { Currency } from "../../config";
import { useCurrencyContext } from "../../context";
import { IOption } from "../../types";
import { customStyles } from "./style";

export const options: IOption[] = [
  {
    value: Currency.USD,
    label: "USD",
  },
  {
    value: Currency.EUR,
    label: "EUR",
  },
  {
    value: Currency.GBR,
    label: "GBR",
  },
];

export const CustomSelect = () => {
  const { currency, setCurrency } = useCurrencyContext();
  const handleOptions = (option: SingleValue<IOption>) => {
    if (option) {
      setCurrency(option.value);
    }
  };

  return (
    <Select
      options={options}
      isMulti={false}
      styles={customStyles}
      onChange={handleOptions}
      value={options.find((option) => option.value === currency)}
    />
  );
};
