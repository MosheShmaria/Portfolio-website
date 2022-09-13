
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/animate-img.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import picture from '../assets/img/profile-picture.jpg';

export const Banner = () => {
   


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <img className="profile-picture" src={picture} alt="Header Img" />
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>Hi  I'm Moshe <br/> Web Developer </h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} className='animate' alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}