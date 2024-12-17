import React from "react";
import styled from "styled-components";

// Container for the About page
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

// Wrapper for the content
const AboutWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 40px;
  border-radius: 10px;
  width: 80%;
  max-width: 900px;
`;

// Title Styling
const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-family: 'Caveat', cursive;
  color: #ffcc00;
`;

// Section for text content
const TextSection = styled.div`
  margin-bottom: 30px;
  font-size: 1.2rem;
  color: #ccc;
  line-height: 1.6;
  text-align: left;
`;

// Subsection Styling for Education
const EducationSection = styled.div`
  font-size: 1.1rem;
  color: #fff;
  line-height: 1.6;
  margin-bottom: 30px;
`;

// Education Title
const EducationTitle = styled.h2`
  font-size: 1.6rem;
  color: #ffcc00;
  margin-bottom: 10px;
`;

// School/College and CGPA Styling
const EducationDetails = styled.p`
  margin: 5px 0;
`;

const About = () => {
  return (
    <Container>
      <AboutWrapper>
        <Title>About Me</Title>

        {/* About Content Section */}
        <TextSection>
          <p>
            Enthusiastic and motivated engineering graduate seeking a
            challenging role and eager to contribute my skills and knowledge
            to create efficient and user-friendly web applications while
            continuously learning and growing.
          </p>
        </TextSection>

        {/* Education Section */}
        <EducationSection>
          <EducationTitle>Education</EducationTitle>
          <EducationDetails>
            <strong>Aditya Engineering College, Surempalem</strong> - Bachelor of Technology (2023)
          </EducationDetails>
          <EducationDetails>
            Electronics & Communication Engineering - CGPA: 7.17
          </EducationDetails>
          <EducationDetails>
            <strong>Intermediate:</strong> Sasi Junior College, Rajahmundry (2019), MPC Branch - CGPA: 8.9
          </EducationDetails>
          <EducationDetails>
            <strong>Secondary Education:</strong> Sri Shiridi Sai Vidya Niketan, Rajahmundry (2017) - CGPA: 9.3
          </EducationDetails>
        </EducationSection>
      </AboutWrapper>
    </Container>
  );
};

export default About;
