import { Card, ListGroup } from 'react-bootstrap'
import react from '../assets/react.png'
import java from '../assets/java.png'
import js from '../assets/js.png'
import angular from '../assets/angular.png'
import git from '../assets/git.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import bootstrap from '../assets/bootstrap.png'
import php from '../assets/php.png'

const Tecnologias = () =>{
    return(
        <div className="container-tecnologies" id='tecnologies'>
            <h1>Tecnologias</h1>
            <p>De manera resumida dejo algunas de las tecnologias con las cuales he trabajado.</p>
            <div className="tecnologies">
                <ListGroup className='row' horizontal>
                    <ListGroup.Item className='col'>
                    <Card style={{ width: '6rem' }}>
                        <Card.Img variant="top" src={react} />
                        <Card.Body>
                            <Card.Title>React</Card.Title>
                        </Card.Body>
                    </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className='col'>
                        <Card style={{ width: '6rem' }}>
                            <Card.Img variant="top" src={java} />
                            <Card.Body>
                                <Card.Title>Java</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className='col'>
                        <Card style={{ width: '6rem' }}>
                            <Card.Img variant="top" src={js} />
                            <Card.Body>
                                <Card.Title>Javascript</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className='col'>
                        <Card style={{ width: '6rem' }}>
                            <Card.Img variant="top" src={angular} />
                            <Card.Body>
                                <Card.Title>Angular</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className='col'>
                        <Card style={{ width: '6rem' }}>
                            <Card.Img variant="top" src={php} />
                            <Card.Body>
                                <Card.Title>PHP</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className='col'>
                        <Card style={{ width: '6rem' }}>
                            <Card.Img variant="top" src={html} />
                            <Card.Body>
                                <Card.Title>HTML</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className='col'>
                        <Card style={{ width: '6rem' }}>
                            <Card.Img variant="top" src={css} />
                            <Card.Body>
                                <Card.Title>CSS</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className='col'>
                        <Card style={{ width: '6rem' }}>
                            <Card.Img variant="top" src={bootstrap} />
                            <Card.Body>
                                <Card.Title>Bootstrap</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className='col'>
                        <Card style={{ width: '6rem' }}>
                            <Card.Img variant="top" src={git} />
                            <Card.Body>
                                <Card.Title>Git</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    )
}

export default Tecnologias