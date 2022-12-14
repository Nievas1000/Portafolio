import { Button, Col, Container, Row } from "react-bootstrap"
import img2 from '../assets/me.jpg'
import img from '../assets/porta1.jpg'
import img3 from '../assets/pre-porta1.png'
const ContainerInfo = () =>{
    return(
        <div className="container-info" id="home">
            <div className='container-img'> 
                <img src={img} />
            </div>
            <Row className="justify-content-md-center section-info">
                <Col xs lg="3">
                    <div className='info'>
                        <h1>Bienvenido a mi portafolio</h1>
                        <p>Te saluda Lautaro Nievas, soy un Desarrollador Web y te doy la bienvenida a mi portafolio. Me considero una persona proactiva y con muchas ganas de aprender.</p>
                        <a href="#contact"><Button className="mt-3" variant="primary">Contactame</Button></a>
                    </div>
                </Col>
                <Col md="auto"></Col>
                <Col xs lg="2">
                    <img className='img-me' src={img3}/>
                </Col>
            </Row>
        </div>
    )
}
export default ContainerInfo