import { Button, Col, Row } from "react-bootstrap";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import { useScrollEffect } from "../hooks/useScrollEfect";
import react from "../assets/react.png";
import aws from "../assets/aws.png";
import bootstrap from "../assets/bootstrap.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import node from "../assets/nodejs.png";
import next from "../assets/next-js.svg";

const Proyectos = () => {
  const [visible] = useScrollEffect("scrollEffectProyects");
  return (
    <div
      className={`scrollEffectProyects ${visible && "visible"}`}
      id="projects"
    >
      <h1>Last Projects</h1>
      <Row className="individual-project d-flex mb-5">
        <Col className="img-project">
          <img className="rounded" src={proj1} alt="MonolithHelper" />
        </Col>
        <Col className="project1-info project-info">
          <div>
            <h4>MonolithHelper</h4>
            <div className="d-flex icons-proyect">
              <img src={react} alt="React" />
              <img src={aws} alt="AWS" />
              <img src={bootstrap} alt="Bootstrap" />
              <img src={css} alt="CSS" />
              <img src={html} alt="HTML" />
            </div>
            <div className="links-projects">
              <Button variant="primary">
                <a
                  href="https://github.com/Nievas1000/MonolithHelper"
                  target="_blank"
                  rel="noreferrer"
                >
                  More Info <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="individual-project d-flex mb-5">
        <Col className="project-info">
          <div>
            <h4>Coaching - LandingPage</h4>
            <div className="d-flex icons-proyect">
              <img src={react} alt="React" />
              <img src={bootstrap} alt="Bootstrap" />
              <img src={css} alt="CSS" />
              <img src={html} alt="HTML" />
            </div>
            <div className="links-projects d-block d-md-flex gap-3">
              <Button variant="primary">
                <a
                  href="https://github.com/Nievas1000/COACHING-PAGE"
                  target="_blank"
                  rel="noreferrer"
                >
                  More Info <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </Button>
              <Button variant="primary">
                <a
                  href="https://james-clear.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit <i className="fa-regular fa-eye"></i>
                </a>
              </Button>
            </div>
          </div>
        </Col>
        <Col className="img-project">
          <img className="rounded" src={proj2} alt="BlogKing" />
        </Col>
      </Row>
      <Row className="individual-project">
        <Col className="img-project">
          <img className="rounded" src={proj3} alt="API" />
        </Col>
        <Col className="project1-info project-info">
          <div>
            <h4>KIRA - Task Organizer</h4>
            <div className="d-flex icons-proyect">
              <img src={node} alt="NodeJS" />
              <img src={react} alt="React" />
              <img src={bootstrap} alt="Bootstrap" />
              <img src={css} alt="CSS" />
              <img src={html} alt="HTML" />
              <h6 className="d-flex align-items-center mt-2">ExpressJs</h6>
            </div>
            <div className="links-projects d-block d-md-flex gap-3">
              <Button variant="primary">
                <a
                  href="https://github.com/Nievas1000/Project-Organizer"
                  target="_blank"
                  rel="noreferrer"
                >
                  More Info <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </Button>
              <Button variant="primary">
                <a
                  href="https://kira-organizer.netlify.app/home"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit <i className="fa-regular fa-eye"></i>
                </a>
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Proyectos;
