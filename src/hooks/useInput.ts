import { ChangeEvent, ChangeEventHandler, useState } from "react"

interface IInput {
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>
}

type UseInputHook = [IInput, () => void]

export const useInput = (initialValue: string): UseInputHook => {
    const [inputValue, setInputvalue] = useState<string>(initialValue)
    const handleInput: ChangeEventHandler<HTMLInputElement> = ({target}) => {
        setInputvalue(target.value)
    }
    const clearInput = () => {
        setInputvalue('')
    }
    return [{value: inputValue, onChange: handleInput}, clearInput]
}