import { Row, Col } from "react-bootstrap";

// Define prop types for ActionList
interface ActionListProps {
  show: () => void;
  deleteAll: () => void;
}

export default function ActionList({ show, deleteAll }: ActionListProps) {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="d-flex justify-content-between">
        <button className="btn-style p-2" onClick={show}>
          Show
        </button>
        <button className="btn-style p-2" onClick={deleteAll}>
          Delete
        </button>
      </Col>
    </Row>
  );
}
