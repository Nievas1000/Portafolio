import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import L from "../assets/L.png";
import N from "../assets/N.png";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActivateLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scroll ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand className="d-flex img-logo" href="/">
          <img src={L} />
          <img src={N} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActivateLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#aboutMe"
              className={
                activeLink === "aboutMe" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActivateLink("aboutMe")}
            >
              About me
            </Nav.Link>
            <Nav.Link
              href="#tecnologies"
              className={
                activeLink === "tecnologies"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActivateLink("tecnologies")}
            >
              Technologies
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActivateLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/lautaro-nievas/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a
                href="https://github.com/Nievas1000"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
              <a href="#contact">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
