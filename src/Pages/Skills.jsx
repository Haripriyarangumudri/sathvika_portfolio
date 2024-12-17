import React from "react";
import styled from "styled-components";

// Container for the Skills page
const Container = styled.div`
  background: url("https://wallpaperaccess.com/full/5651980.jpg") no-repeat center center/cover;
  
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 20px;
`;

// Wrapper for all skills
const SkillsWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 40px;
  border-radius: 10px;
  width: 80%;
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

// Skill card for each skill
const SkillCard = styled.div`
  background-color: #333;
  border-radius: 10px;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
  }
`;

// Icon or skill name
const SkillIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #ffcc00;
`;

// Skill title
const SkillTitle = styled.h2`
  font-size: 1.5rem;
  color: white;
  font-family: 'Caveat', cursive;
  margin-bottom: 10px;
`;

// Skill description
const SkillDescription = styled.p`
  color: #ccc;
  font-size: 1rem;
  text-align: center;
`;

const Skills = () => {
  return (
    <Container>
      <SkillsWrapper>
        {/* Skill 1: HTML */}
        <SkillCard>
          <SkillIcon>🌐</SkillIcon>
          <SkillTitle>HTML</SkillTitle>
          <SkillDescription>Markup language for structuring web content</SkillDescription>
        </SkillCard>

        {/* Skill 2: CSS */}
        <SkillCard>
          <SkillIcon>🎨</SkillIcon>
          <SkillTitle>CSS</SkillTitle>
          <SkillDescription>Stylesheet language for designing web pages</SkillDescription>
        </SkillCard>

        {/* Skill 3: Bootstrap */}
        <SkillCard>
          <SkillIcon>⚡</SkillIcon>
          <SkillTitle>Bootstrap</SkillTitle>
          <SkillDescription>Framework for building responsive web designs</SkillDescription>
        </SkillCard>

        {/* Skill 4: JavaScript */}
        <SkillCard>
          <SkillIcon>📜</SkillIcon>
          <SkillTitle>JavaScript</SkillTitle>
          <SkillDescription>Scripting language for dynamic web pages</SkillDescription>
        </SkillCard>

        {/* Skill 5: React */}
        <SkillCard>
          <SkillIcon>⚛️</SkillIcon>
          <SkillTitle>React</SkillTitle>
          <SkillDescription>Library for building user interfaces</SkillDescription>
        </SkillCard>

        {/* Skill 6: MySQL */}
        <SkillCard>
          <SkillIcon>🗄️</SkillIcon>
          <SkillTitle>MySQL</SkillTitle>
          <SkillDescription>Relational database management system</SkillDescription>
        </SkillCard>

        {/* Skill 7: Python */}
        <SkillCard>
          <SkillIcon>🐍</SkillIcon>
          <SkillTitle>Python</SkillTitle>
          <SkillDescription>Programming language for general-purpose software development</SkillDescription>
        </SkillCard>

        {/* Skill 8: C# */}
        <SkillCard>
          <SkillIcon>🖥️</SkillIcon>
          <SkillTitle>C#</SkillTitle>
          <SkillDescription>Object-oriented programming language for building applications</SkillDescription>
        </SkillCard>

        {/* Skill 9: AWS Cloud Services */}
        <SkillCard>
          <SkillIcon>☁️</SkillIcon>
          <SkillTitle>AWS Cloud Services</SkillTitle>
          <SkillDescription>Cloud computing platform offering scalable computing resources</SkillDescription>
        </SkillCard>

        {/* Skill 10: Azure Cloud Services */}
        <SkillCard>
          <SkillIcon>☁️</SkillIcon>
          <SkillTitle>Azure Cloud Services</SkillTitle>
          <SkillDescription>Cloud platform offering a range of services like computing and storage</SkillDescription>
        </SkillCard>
      </SkillsWrapper>
    </Container>
  );
};

export default Skills;
