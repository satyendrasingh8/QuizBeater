import React from "react";
import { Card, Container } from "react-bootstrap";

function HowToPlay() {
  return (
    <div >
    <Container fluid>
  
    <Card.Title as="h3">How to play  Flipkart Daily  Quiz ? </Card.Title>
<Card.Body>

<Card.Text>1. first of all Download or Open the Flipkart App in your android phone</Card.Text>
  
<Card.Text>2. Login or signup into flipkart app  </Card.Text>
<Card.Text>3. Go To Game section in Flipkart app in the bottom-right side of your android app   </Card.Text>
<Card.Text>4. You will see the banner of "Daily Trivia",
  "Beat The Genius","Bigg Buzz","Ladies vs Gentleman","Guess what","Snake Smash",
  "Quiz Time"etc and many more...  </Card.Text>
 <Card.Text>5. Answers all Questions correctly and win your lucky prize. </Card.Text>
 <Card.Text>6. congratulations!,start playing. </Card.Text>
</Card.Body>



    </Container>
    </div>
  );
}

export default HowToPlay;
