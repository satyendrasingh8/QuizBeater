import React ,{useEffect, useState,useRef} from 'react';
import Mountain from '../images/mountain.jpg';
import {TweenMax,Power3,TimelineLite,Power2} from 'gsap'
import Typical from 'react-typical'
import { Carousel,Card,Container,Row,Col, InputGroup, FormControl, Form,Button } from 'react-bootstrap';
import '../about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
 faYoutube,
  faTelegram,

} from "@fortawesome/free-brands-svg-icons";

function About() {
let container=useRef(null);
let image=useRef(null);
let imageE=useRef(null);

const tl= new TimelineLite();

useEffect(()=>{
tl.to(container,0,{css:{visibility:'visible'}}).

from(image,1.4,{scale:1.6,ease:Power2.easeInOut,delay:-1.6});
})

  return (<div>
  <Carousel  ref={el=>{container=el}}
     >

  <Carousel.Item  >
  <img 
  width="100%"
  height="500"
ref={el=>{image=el}}
src={Mountain} />
    <Carousel.Caption>
      
         
    <b>  <h5>   <a href="https://WebServ4u.com">   <Typical
        steps={['Hello', 1000, 'WebServ4u.com', 3100]}
        loop={Infinity}
        wrapper="p"
      />
  </a></h5></b>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>

<Card className="Acard"> 
<h1>lorem ipsum is now known as </h1>
<p> What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing 
 typesetting industry. Lorem Ipsum has been the i
 ndustry's standard dummy text ever since the 1500s, 
  an unknown printer took a galley of type and scrambled 
  it to make a type specimen book. It has survived not 
   five centuries, but also the leap into electronic typesetting
   , remaining essentially unchanged. It was popularised in the 
    with the release of Letraset sheets containing Lorem Ipsum passages,
     and more recently with desktop publishing s
oftware like Aldus PageMaker including versions of Lorem Ipsum.</p>
<br></br> <br></br>

</Card>
<Card className="Acard">
  <Row>
<Col md="6" lg="6" xl="6">
<div className="container"><Card className="Acard " className="shadow" style={{ width: '18rem' }}>
  <Card.Img
  height="200px"
  variant="top" src="https://images.unsplash.com/photo-1587837073080-448bc6a2329b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
  <Card.Body className="bg-light">
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card></div>
</Col>
<Col md="6" lg="6" xl="6">

<div className="container"><Card className="Acard" className="shadow" style={{ width: '18rem' }}>
  <Card.Img
   height="200px"
  variant="top" src="https://images.unsplash.com/photo-1521870749737-92928aafcc21?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
  <Card.Body className="bg-light">
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card></div>

</Col>


  </Row>


</Card>
<br></br>

<Card className="outer-card">
  <Card.Title as="h2">Our Mission </Card.Title>
<Row>

<Col sm="6" md="6" lg="4" xl="4" >
<Card className="Acard misson-card" >
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col sm="6" md="6" lg="4" xl="4">
<Card className="Acard misson-card" >
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col sm="6" md="6" lg="4" xl="4">
<Card className="Acard misson-card" >
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
</Col>


</Row>
<Row>

<Col sm="6" md="6" lg="4" xl="4" >
<Card className="Acard misson-card" >
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col sm="6" md="6" lg="4" xl="4">
<Card className="Acard misson-card" >
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col sm="6" md="6" lg="4" xl="4">
<Card className="Acard misson-card" >
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
</Col>


</Row>
</Card>

<Card className="outer-card">
  <Card.Title as="h2">Get in Touch! </Card.Title>
<Row width="100%">

<Col  md="9" lg="10" xl="10" >
<Card className="Acard misson-card" >
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email"  required />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Button variant="primary" type="submit">
    Subscribe
  </Button>
</Form>
</Card>
</Col>


</Row>

<Row width="100%">

<Col  md="9" lg="10" xl="10" >
<Card className="Acard misson-card"  >
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <a  href="https://t.me/FlipkartDailyQuiz" ><Button variant="info">
  <FontAwesomeIcon icon={faTelegram} size="4x"  /> &nbsp;<b> Join our Telegram Group</b>  </ Button>
</a><br></br>
<a  href="" ><Button variant="danger">
  <FontAwesomeIcon icon={faYoutube} size="4x"  /> &nbsp;<b> Join our Youtube channel</b>  </ Button>
</a>

</Card>
</Col>


</Row>
 </Card>



   </div>
  );
}


export default About;
