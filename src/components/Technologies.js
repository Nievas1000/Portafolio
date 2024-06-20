import { Card, ListGroup } from "react-bootstrap";
import react from "../assets/react.png";
import js from "../assets/js.png";
import angular from "../assets/angular.png";
import git from "../assets/git.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import bootstrap from "../assets/bootstrap.png";
import aws from "../assets/aws.png";
import node from "../assets/nodejs.png";
import { useScrollEffect } from "../hooks/useScrollEfect";

const Tecnologias = () => {
  const [visible] = useScrollEffect("scrollEffectTec");
  return (
    <div
      className={`container-tecnologies scrollEffectTec ${
        visible && "visible"
      }`}
      id="tecnologies"
    >
      <h1>Technologies</h1>
      <p>
        In summary, I leave you some of the technologies with which I have
        worked.
      </p>
      <div className="tecnologies">
        <ListGroup className="row" horizontal>
          <ListGroup.Item className="col">
            <Card style={{ width: "6rem" }}>
              <Card.Img variant="top" src={react} />
              <Card.Body>
                <Card.Title>React</Card.Title>
              </Card.Body>
            </Card>
          </ListGroup.Item>
          <ListGroup.Item className="col">
            <Card style={{ width: "6rem" }}>
              <Card.Img variant="top" src={node} />
              <Card.Body>
                <Card.Title>NodeJs</Card.Title>
              </Card.Body>
            </Card>
          </ListGroup.Item>
          <ListGroup.Item className="col">
            <Card style={{ width: "6rem" }}>
              <Card.Img variant="top" src={js} />
              <Card.Body>
                <Card.Title>Javascript</Card.Title>
              </Card.Body>
            </Card>
          </ListGroup.Item>
          <ListGroup.Item className="col">
            <Card style={{ width: "6rem" }}>
              <Card.Img variant="top" src={angular} />
              <Card.Body>
                <Card.Title>Angular</Card.Title>
              </Card.Body>
            </Card>
          </ListGroup.Item>
          <ListGroup.Item className="col">
            <Card style={{ width: "6rem" }}>
              <Card.Img variant="top" src={html} />
              <Card.Body>
                <Card.Title>HTML</Card.Title>
              </Card.Body>
            </Card>
          </ListGroup.Item>
          <ListGroup.Item className="col">
            <Card style={{ width: "6rem" }}>
              <Card.Img variant="top" src={css} />
              <Card.Body>
                <Card.Title>CSS</Card.Title>
              </Card.Body>
            </Card>
          </ListGroup.Item>
          <ListGroup.Item className="col">
            <Card style={{ width: "6rem" }}>
              <Card.Img variant="top" src={bootstrap} />
              <Card.Body>
                <Card.Title>Bootstrap</Card.Title>
              </Card.Body>
            </Card>
          </ListGroup.Item>
          <ListGroup.Item className="col">
            <Card style={{ width: "6rem" }}>
              <Card.Img variant="top" src={git} />
              <Card.Body>
                <Card.Title>Git</Card.Title>
              </Card.Body>
            </Card>
          </ListGroup.Item>
          <ListGroup.Item className="col">
            <Card style={{ width: "6rem" }}>
              <Card.Img variant="top" src={aws} />
              <Card.Body>
                <Card.Title>Services</Card.Title>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default Tecnologias;
