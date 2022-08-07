import styled from "styled-components";

export const StyledCardBudget = styled.div`
  display: grid;
  justify-content: space-around;
  grid-template-columns: 150px 86px;
  align-items: center;
  width: 335px;
  height: 100px;
  background-color: #7cc6fe;
  border-radius: 10px;
  margin: 0 auto;
`;
export const Title = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;
export const Button = styled.button`
  border: none;
  border-radius: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  padding: 10px 30px 9px 29px;
  cursor: pointer;
`;
export const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.6);
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`
