import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons from react-icons

const Container = styled.div`
  background: url("https://wallpaperaccess.com/full/5651980.jpg") no-repeat center center/cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const NavLinkStyled = styled(NavLink)`
  margin: 0 15px;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-family: 'Caveat', cursive;
  font-weight: bold;

  &.active {
    color: #ffcc00;
    text-decoration: underline;
  }

  &:hover {
    color: #ffcc00;
  }
`;

const IconsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const IconLink = styled.a`
  color: white;
  font-size: 2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ffcc00;
  }
`;

const Home = () => (
  <Container>
    {/* Navbar displayed over the background */}
    <Navbar>
      <NavLinkStyled to="/" end>
        Home
      </NavLinkStyled>
      <NavLinkStyled to="/about">About</NavLinkStyled>
      <NavLinkStyled to="/skills">Skills</NavLinkStyled>
      <NavLinkStyled to="/projects">Projects</NavLinkStyled>
      <NavLinkStyled to="/certifications">Certifications</NavLinkStyled>
      <NavLinkStyled to="/contact">Contact</NavLinkStyled>
    </Navbar>

    {/* Main content */}
    <div>
      <h1>Vijaya Sathvika Vempati</h1>
      <h2>Full Stack Developer</h2>
      <p>Contact: 9666125316 | sathvikavijju@gmail.com</p>
    </div>

    {/* Social Media Icons */}
    <IconsContainer>
      <IconLink href="https://github.com/Vijayasathvikavempati" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </IconLink>
      <IconLink href="https://www.linkedin.com/in/vijaya-sathvika-vempati/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </IconLink>
    </IconsContainer>
  </Container>
);

export default Home;
