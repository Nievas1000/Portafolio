import { Button, Col, Row } from "react-bootstrap"
import proj1 from '../assets/proj1.png'
import proj2 from '../assets/proj2.png'
import proj3 from '../assets/proj3.png'


const Proyectos = () =>{
    return(
        <div id="projects">
            <h1>Proyectos</h1>
            <Row className="individual-project">
                <Col className="img-project"><img className="rounded" src={proj1}/></Col>
                <Col className="project1-info project-info">
                    <h4>KingGames - Ecommerce</h4>
                    <h6>NextJs - Firebase</h6>
                    <div className="links-projects">
                        <Button variant="primary"><a href="https://github.com/Nievas1000/Videogame-Store----NextJs" target="_blank">Ir al repositorio <i className="fa fa-github" aria-hidden="true"></i></a></Button>
                    </div>
                </Col>
            </Row>
            <Row className="individual-project">
                <Col className="project-info">
                    <h4>BlogKing - Blog</h4>
                    <h6>NextJs - NodeJs - Express</h6>
                    <div className="links-projects">
                        <Button variant="primary"><a href="https://github.com/Nievas1000/PhotographyBlog" target="_blank">Ir al repositorio <i className="fa fa-github" aria-hidden="true"></i></a></Button>
                    </div>
                </Col>
                <Col className="img-project"><img className="rounded" src={proj2}/></Col>
            </Row>
            <Row className="individual-project">
                <Col className="img-project"><img className="rounded" src={proj3}/></Col>
                <Col className="project1-info project-info">
                    <h4>API - University API</h4>
                    <h6>Java - Springboot</h6>
                    <div className="links-projects">
                    <Button variant="primary"><a href="https://github.com/Nievas1000/API-UNIVERSITY" target="_blank">Ir al repositorio <i className="fa fa-github" aria-hidden="true"></i></a></Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Proyectos