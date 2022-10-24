import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import  Navbar  from './components/NavBar'
import ContainerInfo from './components/ContainerInfo';
import SobreMi from './components/SobreMi';
import Tecnologias from './components/Tecnologias';
import Proyectos from './components/Proyectos';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContainerInfo />
      <div className='full-about-me'>
        <div className='container-full-about-me'>
          <SobreMi />
          <Tecnologias />
          <Proyectos />
        </div>
      </div>
    </div>
  );
}

export default App;
