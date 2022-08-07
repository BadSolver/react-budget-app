import { FC, ReactNode } from "react";
import { CurrencyProvider } from "../CurrencyContext/CurrencyContext";

export const AppContextProvider: FC<{children: ReactNode}> = ({
    children,
}) => {
    const providers = [CurrencyProvider]

    return (
        <>
            {providers.reduce((acc, Provider) => {
                return <Provider>{acc}</Provider>
            }, children)}
        </>
    )
}