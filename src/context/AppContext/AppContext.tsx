import { FC, ReactNode } from "react";
import { BudgetProvider } from "../BudgetContext/BudgetContext";
import { CurrencyProvider } from "../CurrencyContext/CurrencyContext";
import { ExpensesProvider } from "../ExpensesContext/ExpensesContext";

export const AppContextProvider: FC<{children: ReactNode}> = ({
    children,
}) => {
    const providers = [CurrencyProvider, ExpensesProvider, BudgetProvider]

    return (
        <>
            {providers.reduce((acc, Provider) => {
                return <Provider>{acc}</Provider>
            }, children)}
        </>
    )
}