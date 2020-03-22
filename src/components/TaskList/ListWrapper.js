import styled from "styled-components";

const ListWrapper = styled.ul`
  list-style-type: none;
  background-color: #ffffff;
  padding: 35px;
  margin: 15px 0;
  max-height: 50vh;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default ListWrapper;
