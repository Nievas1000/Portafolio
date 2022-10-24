import { Button, Col, Row } from "react-bootstrap"
import proj1 from '../assets/proj1.png'
import proj2 from '../assets/proj2.png'


const Proyectos = () =>{
    return(
        <div id="projects">
            <h1>Proyectos</h1>
            <Row>
                <Col><img className="rounded" src={proj1}/></Col>
                <Col className="project1-info">
                    <h4>KingGames - Ecommerce</h4>
                    <h6>NextJs - Firebase</h6>
                    <div className="links-projects">
                        <Button variant="primary"><a href="https://github.com/Nievas1000/Videogame-Store----NextJs">Ir al repositorio <i className="fa fa-github" aria-hidden="true"></i></a></Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>BlogKing - Blog</h4>
                    <h6>NextJs - NodeJs - Express</h6>
                    <div className="links-projects">
                        <Button variant="primary"><a href="https://github.com/Nievas1000/PhotographyBlog">Ir al repositorio <i className="fa fa-github" aria-hidden="true"></i></a></Button>
                    </div>
                </Col>
                <Col><img className="rounded" src={proj2}/></Col>
            </Row>
            <Row>
                <Col><img className="rounded" src={proj2}/></Col>
                <Col className="project1-info">
                    <h4>KingGames - Ecommerce</h4>
                    <h6>NextJs - Firebase</h6>
                    <div className="links-projects">
                    <Button variant="primary"><a href="https://github.com/Nievas1000/Videogame-Store----NextJs">Ir al repositorio <i className="fa fa-github" aria-hidden="true"></i></a></Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Proyectos