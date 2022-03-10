import { FiPlus } from "react-icons/fi";
import AddButtonDiv from "../../styled/addButton";

function AddButton(props) {
  return (
    <AddButtonDiv
      initial={{ y: "100" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.1,type:"spring",stiffness:200 }}
      onClick={props.onClick}
    >
      <FiPlus />
    </AddButtonDiv>
  );
}
export default AddButton;
