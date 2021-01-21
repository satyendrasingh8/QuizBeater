import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import GameType from "./gameType";
import Comment from "./homeblogs/comment";

import HomeContent from "./homeContent";
function Home() {
  return (
    <Container fluid>    <Row >
     
        <Col md="auto" xs="8" sm="8" md="8" lg="8" >
  <HomeContent />
  

    </Col>
    
 <Col xs="4" md="4" sm="4" lg="4">
   <GameType />
 </Col>
 
      
    
    </Row>
    
    
    </Container>

  );
}

export default Home;
