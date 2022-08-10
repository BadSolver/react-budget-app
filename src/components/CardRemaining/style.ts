import styled from "styled-components";
import { StyledCardBudget, Title } from "../CardBudget/style";

interface IProps {
    Overspend?: boolean
}

export const StyledCardRemaining = styled(StyledCardBudget)<IProps>`
    display: flex;
    justify-content: flex-start;
    background-color: ${(props) => (props.Overspend ? "#FF0000" : "#CCD5FF")};
    border-radius: 10px;
    ${(props) => (props.Overspend ? "color: #ffffff;" : "")}
`
export const RemainingTitle = styled(Title)`
    margin-left: 27px;
    
`