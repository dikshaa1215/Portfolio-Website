import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import PrivateChat from "../../Assets/Projects/PrivateChat.png";
import Portfolio from "../../Assets/Projects/Portfolio2.png";
import Ecart from "../../Assets/Projects/ai.jpg";
import ExpenseTracker from "../../Assets/Projects/ExpenseTracker.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Ecart}
              title="Personal Assistant in AI"
              description="A personal assistant AI in Python is an intelligent software application designed to assist users with various tasks through natural language interaction."
              ghLink="https://github.com/dikshaa1215/ai_in_personal_assistant"
              demoLink="https://github.com/dikshaa1215/ai_in_personal_assistant"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="My personal Portfolio Website build with React and Bootstrap. It is fully responsive website which supports both dark and light mode."
              ghLink="https://github.com/dikshaa1215/Portfolio-Website"
              demoLink="https://github.com/dikshaa1215/Portfolio-Website"
            />
          </Col>
          {/* <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={PrivateChat}
              title="Private Chat"
              description="A Personal Chat Application to share resources and hangout with friends build with react.js, css, and Firebase. Have features which allows user for realtime messaging, image sharing and search user."
              ghLink="#"
              demoLink="https://chat-app-rahuljha4171.vercel.app/"
            />
          </Col> */}

          {/* <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={ExpenseTracker}
              title="Expense Tracker"
              description="An online expense tracker using React, Node, Express, and MongoDB as the database. It allows you to keep track of your expenses, investments, and savings. All past transactions are listed, and you can also delete them. "
              ghLink="https://github.com/rahuljha4171/Expense-Tracker"
              demoLink="https://expense-tracker.rahuljha4171.vercel.app/"
            />
          </Col> */}
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
