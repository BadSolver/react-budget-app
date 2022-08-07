import { useCurrencyContext } from '../../context/CurrencyContext/CurrencyContext'
import { RemainingTitle, StyledCardRemaining } from './style'

export const CardRemaining = () => {

  const {currency} = useCurrencyContext()

  return (
    <StyledCardRemaining>
        <RemainingTitle>Remaining: {currency}2000</RemainingTitle>
    </StyledCardRemaining>
  )
}
