import { FiPlus } from "react-icons/fi";
import Button from "../../styled/addButton";

function AddButton(props) {
  return (
    <Button
      initial={{ y: "100" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.1,type:"spring",stiffness:200 }}
      onClick={props.onClick}
    >
      <FiPlus />
    </Button>
  );
}
export default AddButton;
