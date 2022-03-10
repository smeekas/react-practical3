import styled from "styled-components";
import { motion } from "framer-motion";
const TodoItemDiv = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 0.5rem;
  text-align: left;
  color: ${(props) => {
    return !props.completed ? "black" : "#C4C5CA";
  }};
`;
export default TodoItemDiv;
