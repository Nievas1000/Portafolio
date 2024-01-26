import "./App.css";
import Navbar from "./components/NavBar";
import ContainerInfo from "./components/ContainerInfo";
import SobreMi from "./components/AboutMe";
import Tecnologias from "./components/Technologies";
import Proyectos from "./components/Proyects";
import Contacto from "./components/Contact";
import { Resume } from "./components/Resume";
import { PopupWidget } from "react-calendly";

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
      <PopupWidget
        url="https://calendly.com/nievas"
        rootElement={document.getElementById("root")}
        text="Let's schedule a call!"
        textColor="#ffffff"
        color="#0808D8"
      />
    </div>
  );
}

export default App;
