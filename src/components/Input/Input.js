import styled from "styled-components";

const Input = styled.input`
  padding: 15px;
  border: 0;
  height: 30px;
  width: 250px;
  border-radius: 15px;
  outline: 0;
  margin: 5px 0;
  &::placeholder {
    opacity: 0.5;
  }
`;

export default Input;
