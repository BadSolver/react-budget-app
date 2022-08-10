import styled from "styled-components";
import close from '../../assets/icons/close.svg'

export const StyledListItem = styled.li`
    display: flex;
    justify-content: space-around;
    width: 335px;
    margin: 10px auto;
    border-bottom: 1px solid #CCD5FF;
`
export const Title = styled.p`
    width: 100px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    margin-bottom: 14px;
`
export const DeleteButton = styled.button`
    background: url(${close});
    background-repeat: no-repeat;
    width: 7%;
    border: none;
    margin-bottom: 10px;
    cursor: pointer;
`