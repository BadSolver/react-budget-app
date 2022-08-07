import { useCurrencyContext } from '../../context/CurrencyContext/CurrencyContext'
import { RemainingTitle } from '../CardRemaining/style'
import { StyledCardSpent } from './style'

export const CardSpent = () => {

  const {currency} = useCurrencyContext()

  return (
    <StyledCardSpent>
        <RemainingTitle>Spent so far: {currency}1000</RemainingTitle>
    </StyledCardSpent>
  )
}
