import Select from "react-select";
import { IOption } from "../../types";
import { customStyles } from "./style";

export const options: IOption[] = [{
    value: '$',
    label: 'USD'
},
{
    value: '€',
    label: 'EUR',
},
{
    value: '£',
    label: 'GBR',
}]

interface IProps {
  options: IOption[],
  currencies: IOption,
}

export const CustomSelect = ({options, currencies}: IProps) => {
  return (
    <Select options={options} isMulti={false} styles={customStyles} defaultValue={currencies}/>
  )
}
