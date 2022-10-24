import { Button, Col, Container, Row } from "react-bootstrap"
import img2 from '../assets/me.jpg'
import img from '../assets/porta1.jpg'
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
                        <Button className="mt-3" variant="primary"><a href="https://kinggames.vercel.app/">Contactame</a></Button>
                    </div>
                </Col>
                <Col md="auto"></Col>
                <Col xs lg="2">
                    <img className='img-me' src={img2}/>
                </Col>
            </Row>
        </div>
    )
}
export default ContainerInfo