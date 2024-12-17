import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // React Router
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger icons

// Container for the Navbar
const Nav = styled.nav`
  position: fixed;
  top: 10px;
  left: 0;
  width: 100px;
  
  padding: 20px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Hamburger icon styles for mobile view
const HamburgerIcon = styled.div`
  font-size: 2rem;
  color: white;
  display: block;
`;

// Mobile Menu (Hamburger) styles
const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  width: 10%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 20px;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.isOpen ? "translateX(0)" : "translateX(100%)")};
  z-index: 999;
`;

// Mobile Menu Links
const MobileMenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  margin: 15px 0;
  &:hover {
    color: #ffcc00;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current page URL

  // Toggle hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Only render the navbar on the About, Skills, Projects, Certifications, and Contact pages
  const showNavbar = location.pathname !== "/";

  return (
    <>
      {showNavbar && (
        <Nav>
          {/* Hamburger Icon */}
          <HamburgerIcon onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </HamburgerIcon>

          {/* Mobile Navbar (Hamburger Menu) */}
          <MobileMenu isOpen={isOpen}>
          <MobileMenuLink to="/" onClick={toggleMenu}>
              Home
            </MobileMenuLink>
            <MobileMenuLink to="/about" onClick={toggleMenu}>
              About
            </MobileMenuLink>
            <MobileMenuLink to="/skills" onClick={toggleMenu}>
              Skills
            </MobileMenuLink>
            <MobileMenuLink to="/projects" onClick={toggleMenu}>
              Projects
            </MobileMenuLink>
            <MobileMenuLink to="/certifications" onClick={toggleMenu}>
              Certifications
            </MobileMenuLink>
            <MobileMenuLink to="/contact" onClick={toggleMenu}>
              Contact
            </MobileMenuLink>
          </MobileMenu>
        </Nav>
      )}
    </>
  );
};

export default Navbar;
