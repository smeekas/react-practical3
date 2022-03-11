import styled from "styled-components";
import { motion } from "framer-motion";
export default  styled(motion.button)`
  border: 1px solid #51e4a6;
  position: absolute;
  bottom: -32px;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  background-color: #51e4a6;
  color: #46ba8a;
  cursor: pointer;

  &:hover {
    background-color: #46ba8a;
    color: #51e4a6;
  }
`;

