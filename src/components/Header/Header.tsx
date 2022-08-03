import { useState } from 'react'
import { IOption } from '../../types'
import { CardBudget } from '../CardBudget/CardBudget'
import { CardRemaining } from '../CardRemaining/CardRemaining'
import { CardSpent } from '../CardSpent/CardSpent'
import { CustomSelect, options } from '../CustomSelect/CustomSelect'
import { Title } from '../Title/Title'
import { StyledHeader } from './style'

export const Header = () => {

    const [option] = useState<IOption[]>(options)
    const [currencies, serCurrencies] = useState<IOption>({
        value:  '$',
        label: 'USD'
    })
   

  return (
    <StyledHeader>
        <Title text='Budget app'/>  
        <CustomSelect options={option} currencies={currencies}/> 
        <CardBudget />
        <CardRemaining />
        <CardSpent />
    </StyledHeader>
    
  )
}
