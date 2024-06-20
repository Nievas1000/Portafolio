import "./App.css";
import Navbar from "./components/NavBar";
import ContainerInfo from "./components/ContainerInfo";
import SobreMi from "./components/AboutMe";
import Tecnologias from "./components/Technologies";
import Proyectos from "./components/Proyects";
import Contacto from "./components/Contact";
import { Resume } from "./components/Resume";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContainerInfo />
      <div className="full-about-me">
        <div className="container-full-about-me">
          <SobreMi />
          <Resume />
          <Tecnologias />
          <Proyectos />
          <Contacto />
        </div>
      </div>
    </div>
  );
}

export default App;
