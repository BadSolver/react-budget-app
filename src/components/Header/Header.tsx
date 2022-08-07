import { CardBudget } from '../CardBudget/CardBudget'
import { CardRemaining } from '../CardRemaining/CardRemaining'
import { CardSpent } from '../CardSpent/CardSpent'
import { CustomSelect } from '../CustomSelect/CustomSelect'
import { Title } from '../Title/Title'
import { StyledHeader } from './style'

export const Header = () => {
return (
    <StyledHeader>
        <Title text='Budget app'/>  
        <CustomSelect /> 
        <CardBudget />
        <CardRemaining />
        <CardSpent />
    </StyledHeader>
    
  )
}
