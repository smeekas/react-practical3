import styled from "styled-components";
const TodoItemDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 0.5rem;
  color: ${(props) => (!props.completed ? "black" : "#C4C5CA")};
`;
export default TodoItemDiv