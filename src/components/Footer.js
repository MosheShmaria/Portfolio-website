import { Container, Row, Col } from "react-bootstrap";
import picture from '../assets/img/profile-picture.jpg';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    
                    <Col size={12} sm={6}>
                        <img className="profile-picture" src={picture} alt="Header Img" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/moshe-shmaria-51a9ba208/"><img src={navIcon1} alt="Icon" /></a>
                            <a href="https://m.facebook.com/profile.php?id=100085210044456"><img src={navIcon2} alt="Icon" /></a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}