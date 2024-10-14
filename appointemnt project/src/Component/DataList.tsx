import { Col, Row } from "react-bootstrap";

// Define a type for the person array elements
interface PersonProps {
  person: Array<{
    id: string;
    name: string;
    date: string;
    img: string;
  }>;
}

export default function DataList(props: PersonProps) {
  return (
    <Row className="justify-content-center">
      <Col sm="8">
        <div className="rectangle p-2">
          {props.person.length ? (
            props.person.map((el, index) => (
              <div key={index} className="d-flex border-bottom mx-3 my-2">
                <img src={el.img} alt="logo" className="img-avatar" />
                <div className="px-3">
                  <p className="fs-6">{el.name}</p>
                  <p className="d-inline">{el.date}</p>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-center p-5">لايوجد مواعيد</h1>
          )}
        </div>
      </Col>
    </Row>
  );
}
