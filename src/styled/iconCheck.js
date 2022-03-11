import styled from "styled-components";

export default styled.div`
  border: 3px solid ${(props) => (!props.completed ? "#cbccd0" : "#5be5ab")};
  border-radius: 50%;
  width: 1.2rem;
  height: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover .checks {
    color: #5be5ab;
  }
  &:hover {
    border-color: #5be5ab;
  }
`;


