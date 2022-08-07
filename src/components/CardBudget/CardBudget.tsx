import { ChangeEvent, useState } from 'react'
import { useCurrencyContext } from '../../context/CurrencyContext/CurrencyContext'
import { Button, Input, StyledCardBudget, Title } from './style'

export const CardBudget = () => {

  const [isEditMode, setIsEditMode] = useState(true)
  const [valueInput, setValueInput] = useState('')
  const {currency} = useCurrencyContext()

  const hadleEditMode = () => {
    setIsEditMode(false)
  }

  const handleSaveEdit = () => {
    setIsEditMode(true)
  }

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValueInput(event.target.value)
  }

  return (
    <StyledCardBudget>
      {isEditMode ? 
      <>
        <Title>Budget: {currency}{valueInput} </Title>
        <Button onClick={hadleEditMode}>Edit</Button>
      </> : 
      <>
        <Input placeholder='Enter budget...' value={valueInput} onChange={handleInput} type='number'/>
        <Button onClick={handleSaveEdit}>Save</Button>
      </>}
        
    </StyledCardBudget>
  )
}
