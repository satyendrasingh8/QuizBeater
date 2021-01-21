import React ,{useEffect, useState,useRef} from 'react';
import Mountain from '../images/mountain.jpg';
import me from '../images/img_bg.jpg';
import {TweenMax,Power3,TimelineLite,Power2} from 'gsap'
import Typical from 'react-typical'
import { Carousel,Card,Container,Row,Col, InputGroup, FormControl, Form,Button } from 'react-bootstrap';
import '../about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
 faYoutube,
  faTelegram,
  faGithub

} from "@fortawesome/free-brands-svg-icons";
import { splitColor } from 'gsap/gsap-core';

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
      
    <b> <div> Welcome To</div></b>
    <b> <b></b> <h5 >  <b>
      <div style={{textShadow:"1px 1px black" }}><a href="https://WebServ4u.com">   <Typical
        steps={['', 1000, 'WebServ4u.com', 2600,]}
        loop={Infinity}
        wrapper="p"
        
      />
  </a></div> </b></h5></b>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>

<Card className="Acard"> 

<p>
  <b><div style={{textShadow:"1px 1px black" }}><h3>WELCOME ! </h3></div> </b>
</p>
<p><b> To a creative studio that loves to learn, collaborate and create.</b>  </p>
<p> 
<i>"The <b>mission</b> of our <b>blog </b> is to encourage a thoughtful life that leads to feelings of 
belonging and hope in both myself and my readers by exposure to a variety of ideas,
experiences, and real-life stories . <b>Laughter</b> is always <b>Welcome</b>".</i>
</p>
<p>We wite because,feel compelled to write. Our blog is for like-interested people
  who want to live a mindful, introspective life as well the 
  <b> occasional laugh. </b> </p>
<br></br> <br></br>

</Card>
<b><h2><div style={{textShadow:"1px 1px black" }}>Meet Our Teem</div>  </h2></b>
<Card className="Acard">
  <Row>
<Col md="6" lg="6" xl="6">
<div className="container"><Card className="Acard " className="shadow" style={{ width: '18rem' }}>
  <Card.Img
  height="200px"
  variant="top" src={me} />
  <Card.Body className="bg-light">
    <Card.Title  ><b> 
      <div style={{textShadow:"1px 1px black" }}>Satyendra Singh</div></b></Card.Title>
    <Card.Subtitle style={{fontSize:"6",
      textDecoration: "underline wavy green"
  
  }}>
      Developer | Managing Director </Card.Subtitle><br></br>
    <Card.Text><div style={{fontFamily:"courier",
    textIndent:"10px"
 
  }}>
      " A collaborative explosion of creative fueled by a community of amazing
      Developers and designers. So come be our friend and 
      see if we mean it." 
      
      </div>
    </Card.Text>
  </Card.Body>
</Card></div>
</Col>
<Col md="6" lg="6" xl="6">

<div className="container"><Card className="Acard" className="shadow" style={{ width: '18rem' }}>
  <Card.Img
   height="230px"
  variant="top" src="https://trustyathartha.in/static/media/r.acd6f040.jpg" />
   <Card.Body className="bg-light">
    <Card.Title  ><b> 
      <div style={{textShadow:"1px 1px black" }}>Raj Patel</div></b></Card.Title>
    <Card.Subtitle style={{fontSize:"6",
      textDecoration: "underline wavy green"
  
  }}>
      Developer | Freelancer | Project Manager </Card.Subtitle><br></br>
    <Card.Text><div style={{fontFamily:"courier",
    textIndent:"10px"
 
  }}>
      " Complete IT solutions Websites | Mobile Apps 
      | College Projects Visit my official website 
      <a href="https://mywebians.com"> MyWebians.com </a>
      "</div>
    </Card.Text>
    
  </Card.Body>
</Card></div>

</Col>


  </Row>


</Card>
<br></br>

<Card className="outer-card">
  <Card.Title as="h2"><h2><div style={{textShadow:"1px 1px black" }}> Our Mission</div> </h2> </Card.Title>
<Row>

<Col sm="6" md="6" lg="4" xl="4" >
<Card className="Acard misson-card" >
  <Card.Body>
    <Card.Title><div style={{textShadow:"1px 1px black" }}> Flexibility</div> </Card.Title>
    
    <Card.Text><div style={{fontFamily:"courier",
    textIndent:"10px"
 
  }}>
 Build tools that can be leveraged across a wide range of projects and ease.
      
      </div>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col sm="6" md="6" lg="4" xl="4">
<Card className="Acard misson-card" >
  <Card.Body>
    <Card.Title><div style={{textShadow:"1px 1px black" }}> Support</div> </Card.Title>
    
    <Card.Text><div style={{fontFamily:"courier",
    textIndent:"10px"
 
  }}>
      Deliver excellent support through training, detailed docs
      and community
      
      </div>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col sm="6" md="6" lg="4" xl="4">
<Card className="Acard misson-card" >
  <Card.Body>
    <Card.Title><div style={{textShadow:"1px 1px black" }}> creativity</div> </Card.Title>
    
    <Card.Text><div style={{fontFamily:"courier",
    textIndent:"10px"
 
  }}>
     Empower creative expression in a fun way  by making our tools intuitive and highly 
     capable. 
      
      </div>
    </Card.Text>
  </Card.Body>
</Card>
</Col>


</Row>
<Row>

<Col sm="6" md="6" lg="4" xl="4" >
<Card className="Acard misson-card" >
  <Card.Body>
    <Card.Title><div style={{textShadow:"1px 1px black" }}> Integrity!</div> </Card.Title>
    
    <Card.Text><div style={{fontFamily:"courier",
    textIndent:"10px"
 
  }}>
    Maintain reputation of integrityn and reliability and focused around our users requirement.
      
      </div>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col sm="6" md="6" lg="4" xl="4">
<Card className="Acard misson-card" >
  <Card.Body>
    <Card.Title><div style={{textShadow:"1px 1px black" }}> Stability</div> </Card.Title>
    
    <Card.Text><div style={{fontFamily:"courier",
    textIndent:"10px"
 
  }}>
      Avoid the common frailties of open
      source projects while also keeping the tools very accesible.
      
      </div>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col sm="6" md="6" lg="4" xl="4">
<Card className="Acard misson-card" >
  <Card.Body>
    <Card.Title><div style={{textShadow:"1px 1px black" }}> Innovation</div> </Card.Title>
    
    <Card.Text><div style={{fontFamily:"courier",
    textIndent:"10px"
 
  }}>
     Try to create world class-tools that standup to the most rigorous
     implementation.
      
      </div>
    </Card.Text>
  </Card.Body>
</Card>
</Col>


</Row>
</Card>

<Card className="outer-card">
  <Card.Title as="h2">Contact  </Card.Title>
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
</a><br></br>
<a  href="https://github.com/satyendrasingh8" ><Button variant="dark">
  <FontAwesomeIcon icon={faGithub} size="4x"  />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;<b> Follow on Github  </b>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; </ Button>
</a>

</Card>
</Col>


</Row>
 </Card>



   </div>
  );
}


export default About;
