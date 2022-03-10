import styled from "styled-components";
import { motion } from "framer-motion";
const TodoInputinput = styled(motion.input)`
  width: 95%;
  outline: none;
  border: none;
  font-size: 1rem;
  margin: 0.7rem 0.5rem;
  border-bottom: 2px solid #ccc;
  &.error {
    border-color: red;
  }

  &.error {
    animation: shake 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
  &.error::placeholder {
    color: red;
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`;
export default TodoInputinput;
