import React from "react";
import { Card, Container, Nav, Row } from "react-bootstrap";

import HomeContent from "./homeContent";
function GameType() {
  return (
    <div >
  <Container>
    
  <Card >
  <Card.Header as="h6">Daily Quiz </Card.Header>
     <Row>  <Nav><Nav.Link href="/fetchedQuiz"> DailyTrivia</Nav.Link> 
     <Nav.Link href="/"> Beat The Genius</Nav.Link> 
     <Nav.Link href="/"> Bigg Buzz</Nav.Link> 
     <Nav.Link href="/"> Snake Smash</Nav.Link> 
     <Nav.Link href="/"> Guess what?</Nav.Link> 
    </Nav> </Row>
    
     </Card>
  </Container>
    </div>
  );
}

export default GameType;
