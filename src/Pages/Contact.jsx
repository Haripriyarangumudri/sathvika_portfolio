import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background: url("https://wallpaperaccess.com/full/5651980.jpg") no-repeat center center/cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 20px;
`;

const FormContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 30px;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #ffcc00;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 1.2rem;

  &:hover {
    background-color: #e6b800;
  }
`;

const SuccessMessage = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border-radius: 5px;
  font-size: 1.2rem;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to the backend (json-server)
    const response = await fetch("http://localhost:3000/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSuccess(true); // Set success state to true
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setSuccess(false); // In case of error, we can handle it or display a failure message
    }
  };

  return (
    <Container>
      <FormContainer>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <TextArea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
          />
          <Button type="submit">Send Message</Button>
        </form>

        {/* Success message displayed after submission */}
        {success && <SuccessMessage>Your message has been sent successfully!</SuccessMessage>}
      </FormContainer>
    </Container>
  );
};

export default Contact;
