import { Button, Col, Row } from "react-bootstrap";
import img from "../assets/porta1.jpg";
import img3 from "../assets/pre-porta1.png";
import { useEffect, useState } from "react";
const ContainerInfo = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Full-Stack Developer", "Software Engineer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <div className="container-info" id="home">
      <Row className="justify-content-md-center section-info">
        <Col xs lg="4" className="upper-info">
          <div className="info">
            <h1>
              {`Hi! I'm Lautaro`}{" "}
              <span
                className="txt-rotate"
                data-rotate='[ "Full-Stack Developer", "Software Engineer" ]'
              >
                <br />
                <span className="wrap">{text}</span>
              </span>
            </h1>
            <p>
              Hello and welcome to my portfolio. I'm Lautaro Nievas, a web
              developer focused on creating innovative solutions for real
              problems. In this space, you will find examples of my work and
              skills, and you will be able to see how I can contribute to your
              project.
            </p>
            <a href="#contact" className="d-flex justify-content-center">
              <Button className="mt-3" variant="primary">
                Contact
              </Button>
            </a>
          </div>
        </Col>
        <Col md="2"></Col>
        <Col xs lg="4">
          <img className="img-me" src={img3} alt="img" />
        </Col>
      </Row>
    </div>
  );
};
export default ContainerInfo;
