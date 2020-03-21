import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  border: 0;
  height: 30px;
  width: 150px;
  margin: 13px 0;
  border-radius: 15px;
  background-color: #0b4480;
  color: #ffffff;
  cursor: pointer;
  outline: 0;
  &:active {
    background-color: #08325e;
  }
`;

export default Button;
