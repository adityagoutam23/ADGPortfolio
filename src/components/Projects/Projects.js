import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mythological from "../../Assets/Projects/mythological.png";
import sudoku from "../../Assets/Projects/sudoku.png";
import tictactoe from "../../Assets/Projects/tictactoe.png";
import travelguru from "../../Assets/Projects/travelguru.png";
import lstm from "../../Assets/Projects/lstm.png";
import aihu from "../../Assets/Projects/aihu.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Previous <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Below are some of my Projects that I have worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lstm}
              isBlog={false}
              title="Cyclone Prediction using LSTM"
              description="Made use of machine learning model to predict cyclones using a dataset from 1769 to 2020 - LSTM, Python"
              ghLink="https://github.com/adityagoutam23/Cyclone_Prediction-using_LSTM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mythological}
              isBlog={false}
              title="Mythological Scene Recognition"
              description="Worked on summarizing 12 classes geneated paragraphs for summary creation - Knowledge Graph, Python."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aihu}
              isBlog={false}
              title="AIHU - Car (Driver Assistance for Uncertain Situation)"
              description="Designed a decision making model on dataset of 800 plus objects - Decision Tree, SpeechRecognition, NLTK"
              ghLink="https://github.com/adityagoutam23/AIHU-Car-Driver-Assistance-for-Uncertain-Situation"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="Welcome to the classic game of Tic-Tac-Toe. Here you may select between various levels and play as your favourite X or O"
              ghLink="https://github.com/adityagoutam23/Tic-Tac-Toe"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travelguru}
              isBlog={false}
              title="TravelGuru"
              description="Created trip and hotel planner using concepts of file handling with 1200 plus lines of code - C++"
              ghLink="https://github.com/adityagoutam23/TravelGuru"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sudoku}
              isBlog={false}
              title="Puzzle Sudoku"
              description="This project is based on the famous puzzle SUDOKU. You may solve the puzzle on your own by taking some hints or else use the sudoku solver to solve the puzzle completely. The puzzle is programmed using c++ programming language."
              ghLink="https://github.com/adityagoutam23/Sudoku"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
