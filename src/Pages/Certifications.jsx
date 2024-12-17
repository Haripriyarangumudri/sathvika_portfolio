import React from "react";
import styled from "styled-components";
import { FaAws, FaPython, FaMicrosoft } from "react-icons/fa"; // AWS, Python, and Azure icons

// Container for the page
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

// Wrapper for the certifications
const CertificationsWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
 
  border-radius: 10px;
  width: 80%;
  max-width: 800px;
`;

// Title styling
const Title = styled.h1`

  font-size: 2.5rem;
  margin-bottom: 40px;
  font-family: 'Caveat', cursive;
  color: #ffcc00;
`;

// Card container for each certification

// border-radius: 10px;
// margin-bottom: 20px;
const Card = styled.div`
  background-color: #333;
 
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
  }
`;

// Icon for certifications
const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #ffcc00;
`;

// Text content for each certification
const Text = styled.div`
  flex: 1;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`;

const CertificationTitle = styled.h2`
  font-size: 1.8rem;
  margin: 0;
  font-family: 'Caveat', cursive;
`;

const CertificationDescription = styled.p`
  margin-top: 5px;
  font-size: 1rem;
  color: #ccc;
`;

const Certifications = () => {
  return (
    <Container>
      <CertificationsWrapper>
        <Title>Certifications</Title>

        {/* Certification 1: AWS Cloud Practitioner */}
        <Card>
          <IconWrapper>
            <FaAws />
          </IconWrapper>
          <Text>
            <CertificationTitle>AWS Cloud Practitioner</CertificationTitle>
            <CertificationDescription>
              AWS Cloud Practitioner certification demonstrates foundational knowledge of cloud computing and AWS services.
            </CertificationDescription>
          </Text>
        </Card>

        {/* Certification 2: MTA Python Programming */}
        <Card>
          <IconWrapper>
            <FaPython />
          </IconWrapper>
          <Text>
            <CertificationTitle>MTA Python Programming</CertificationTitle>
            <CertificationDescription>
              Microsoft Technology Associate (MTA) Python Programming certification validates your skills in Python programming fundamentals.
            </CertificationDescription>
          </Text>
        </Card>

        {/* Certification 3: Azure Fundamentals */}
        <Card>
          <IconWrapper>
            <FaMicrosoft />
          </IconWrapper>
          <Text>
            <CertificationTitle>Azure Fundamentals</CertificationTitle>
            <CertificationDescription>
              Azure Fundamentals certification demonstrates knowledge of cloud concepts, Azure services, and cloud solutions.
            </CertificationDescription>
          </Text>
        </Card>
      </CertificationsWrapper>
    </Container>
  );
};

export default Certifications;
