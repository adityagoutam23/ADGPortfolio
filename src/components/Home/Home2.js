import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import "../../Assets/Home2.css";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am passionate about coding and the possibilities it can achieve
              <br />
              <br />While having experience in classic languages, (don't consider me noob) like
              <i>
                <b className="purple"> Java, C++ and Python. </b>
              </i>
              <br />
              <br />
              My interests include domain like &nbsp;
              <i>
                <b className="purple">Data Science and Machine Learning </b> and
                also in areas related to{" "}
                <b className="purple">
                  Transformer Models.
                </b>
              </i>
              <br />
              <br />
              In my free time I like to follow my hobbies like
              <b className="purple"> Poetry</b> and
              <i>
                <b className="purple">
                  {" "}
                  Cooking
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Chinese and Indian cuisine</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <div className="avatar-frame">
                <img src={myImg} className="img-fluid rounded-circle" alt="avatar" />
              </div>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Feel free to <span className="purple">CONNECT </span> with me</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/adityagoutam23"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aditya-goutam-323a201ba/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/adityagoutam23"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
