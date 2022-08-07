import { createContext, FC, ReactNode, useContext, useState } from "react";
import { Currency } from "../../config/currency";

interface ICurrency {
    currency: string,
    setCurrency: (value: Currency) => void
}

export const CurrencyContext = createContext<ICurrency>({
    currency: Currency.USD,
    setCurrency: (value: Currency) => {}
})

export const useCurrencyContext = () => useContext(CurrencyContext)

const useCurrencyValue = () => {
    const [currencyContext, setCurrencyContext] = useState<ICurrency>(() => {
        return {
            currency: Currency.USD,
            setCurrency: (value: Currency) => {
                setCurrencyContext((context) => {
                    return {...context, currency: value}
                })
            }
        }
    })

    return currencyContext
}

export const CurrencyProvider:FC<{children: ReactNode}> = ({children}) => {
    return <CurrencyContext.Provider value={useCurrencyValue()}>
            {children}
        </CurrencyContext.Provider>
}