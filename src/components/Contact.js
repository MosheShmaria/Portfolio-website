import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contactImg.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  
    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Get In Touch</h2>
                                        <Row >
                                            <Col size={12}  className="px-1">
                                            <i class="gg-mail"></i>
                                              <p>mosheshmaria@gmail.com</p>
                                            </Col>
                                            <hr/>
                                            <Col size={12} className="c">
                                            <i class="gg-pin"></i>
                                            <p>2417 Avenue R, Brooklyn, NY 11229</p>
                                            </Col>
                                            <hr />
                                            <Col size={12}  className="px-1">
                                            <i class="gg-phone"></i>
                                            <p>+972508711758</p>
                                            </Col>
                                        </Row>
                            
                                </div>
}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}