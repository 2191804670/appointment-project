import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { person as personData } from "./Data"; // Rename person import to avoid conflict with state variable
import DataList from "./Component/DataList";
import ActionList from "./Component/ActionList";

function App() {
  const [person, setPerson] = useState(personData); // Define state at the component level

  const showhandle = () => {
    setPerson(personData); // Show the appointments (you can adjust this as needed)
  };

  const Deletehandle = () => {
    setPerson([]); // Delete all appointments (you can adjust this as needed)
  };

  return (
    <div className="font color-body">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col sm="8">
            <h3>
              You have{" "}
              <span
                style={{
                  color: "white",
                  backgroundColor: "grey",
                  padding: "5px",
                }}
              >
                {" "}
                {person.length}
              </span>{" "}
              appointments:
            </h3>
          </Col>
        </Row>

        <DataList person={person} />

        <ActionList show={showhandle} deleteAll={Deletehandle} />
      </Container>
    </div>
  );
}

export default App;
