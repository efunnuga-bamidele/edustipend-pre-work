import ListGroup from "react-bootstrap/ListGroup";
import { GoPlus } from "react-icons/go";
export default function ListItemComponent({ text }) {
  return (
    <ListGroup.Item
      as="li"
      className="list_item d-flex justify-content-between align-items-start"
    >
      {text}
      <GoPlus />
    </ListGroup.Item>
  );
}
