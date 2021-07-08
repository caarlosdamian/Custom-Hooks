import React from "react";
import { Jumbotron,Container } from "react-bootstrap";
function HeroSection() {
  return (
    <Jumbotron fluid>
    <Container>
      <h1>Cats Application</h1>
      <p>
       Simple Cats api consuming application tu get practice with custom Hooks.
      </p>
    </Container>
  </Jumbotron>
  );
}

export default HeroSection;
