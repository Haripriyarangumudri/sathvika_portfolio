import React from "react";
import styled from "styled-components";

// Container for the Projects page
const Container = styled.div`
  background: url("https://wallpaperaccess.com/full/5651980.jpg") no-repeat center center/cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 20px;
`;

// Wrapper for the project description
const ProjectWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 40px;
  border-radius: 10px;
  width: 80%;
  max-width: 800px;
`;

// Title styling for the page
const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 30px;
  font-family: 'Caveat', cursive;
  color: #ffcc00;
`;

// Project Card
const ProjectCard = styled.div`
  background-color: #333;
  border-radius: 10px;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 20px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
  }
`;

// Project Title
const ProjectTitle = styled.h2`
  font-size: 2rem;
  color: #ffcc00;
  font-family: 'Caveat', cursive;
  margin-bottom: 10px;
`;

// Project Description
const ProjectDescription = styled.p`
  color: #ccc;
  font-size: 1.2rem;
  line-height: 1.6;
`;

// Button Styling (Optional, you can link it to GitHub or demo)
const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #ffcc00;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.2rem;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e6b800;
  }
`;

const Projects = () => {
  return (
    <Container>
      <ProjectWrapper>
        <Title>Projects</Title>

        {/* E-Health Monitoring System Project Card */}
        <ProjectCard>
          <ProjectTitle>Development of E-Health Monitoring System using IoT</ProjectTitle>
          <ProjectDescription>
            Here, we create a Remote health monitoring system based on IoT by connecting a few latest sensors to measure health parameters such as heart rate, body temperature, and blood pressure.
          </ProjectDescription>
          <ProjectDescription>
            The data is sent to the Arduino IoT cloud where it can be monitored remotely from any location.
          </ProjectDescription>
          <Button href="https://github.com/Vijayasathvikavempati" target="_blank">
            View Project
          </Button>
        </ProjectCard>
      </ProjectWrapper>
    </Container>
  );
};

export default Projects;
