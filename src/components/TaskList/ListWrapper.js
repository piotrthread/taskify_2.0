import styled from "styled-components";

const ListWrapper = styled.ul`
  list-style-type: none;
  background-color: #ffffff;
  padding: 35px;
  margin: 15px 0;
  height: 50vh;
  min-width: 250px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default ListWrapper;
