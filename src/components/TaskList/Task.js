import styled from "styled-components";

const Task = styled.li`
  font-size: 12px;
  padding: 15px 0;
  border-bottom: 1px solid #404040;
  color: #404040;
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
    border: 0;
  }
`;

export default Task;
