import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola Everyone, I am <span className="purple"> Aditya Goutam </span>
            hailing from Bihar, India.
            <br />
            I am currently an Intern as a Quality Assurance Analyst at <span className="purple"> PTC Software. </span>
            <br />
            Along with pursuing my Bachelors Degree in Computer Engineering from MIT Academy of Engineering
            <br />
            <br />
            I love to spend time in my hobbies like!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing Poetry
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "On a path where every turn is like a learning!"{" "}
          </p>
          <footer className="blockquote-footer">Aditya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
