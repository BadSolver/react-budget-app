import { useState } from 'react'
import { useBudgetContext } from '../../context/BudgetContext/BudgetContext'
import { useCurrencyContext } from '../../context/CurrencyContext/CurrencyContext'
import { useInput } from '../../hooks/useInput'
import { Button, Input, StyledCardBudget, Title } from './style'

export const CardBudget = () => {

  const {budget, changeBudget} = useBudgetContext()
  const [isEditMode, setIsEditMode] = useState(true)
  const {currency} = useCurrencyContext()
  const [inputOptions, clearInput] = useInput('')

  const hadleEditMode = () => {
    setIsEditMode(false)
  }

  const handleSaveEdit = () => {
    changeBudget(Number(inputOptions.value))
    setIsEditMode(true)
    clearInput()
  }

  // const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
  //   setValueInput(event.target.value)
  // }

  return (
    <StyledCardBudget>
      {isEditMode ? 
      <>
        <Title>Budget: {currency}{budget} </Title>
        <Button onClick={hadleEditMode}>Edit</Button>
      </> : 
      <>
        <Input placeholder='Enter budget...'  type='number' {...inputOptions}/>
        <Button onClick={handleSaveEdit}>Save</Button>
      </>}
        
    </StyledCardBudget>
  )
}
