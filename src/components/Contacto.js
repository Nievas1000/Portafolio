import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import img_contact from '../assets/img-contact.png'

const Contacto = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    if(formDetails.message === '' || formDetails.email === '' || formDetails.firstName === '' || formDetails.lastName === ''){
      return setStatus({ succes: true, message: 'You must complete the fields'});
    }
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("https://floating-sea-59391.herokuapp.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    console.log(result)
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <div id="contact">
        <h1>Contacto</h1>
        <Container className="d-flex">
                <form onSubmit={handleSubmit}>
                  <Row className="form-contact">
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={12}>
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <Col sm={1} className="d-flex send">
                        <button type="submit"><span>{buttonText}</span></button>
                        <img className="img-contact" src={img_contact}/>
                      </Col>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
        </Container>
    </div>
  )
}

export default Contacto