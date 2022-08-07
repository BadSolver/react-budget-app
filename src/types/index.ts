import { Currency } from "../config/currency";

export interface IOption {
    value: Currency;
    label: keyof typeof Currency;
} 