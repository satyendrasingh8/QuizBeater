import React, { Component } from "react";
import moment from "moment";
import {Card,Button,ListGroup, CardDeck,Row,Image} from 'react-bootstrap'
 class FetchedQus extends Component {

  render(){
    const { posts, loading,curDate } = this.props;

  if (loading) {
    return <h2>Loading...</h2>
}

  return (
    <div style={{marginBottom:'30px'}} >
  {
    Array.from(posts).map(data => (
      <div key={data.id} className="alert alert-primary">
      <Card>
   <b ><Card.Title style={{color:"blue",fontSize:28}}>Flipkart daily trivia Quiz answers:
    {curDate}
       </Card.Title> </b>
  <Card.Body>
  <Card.Title> {data.Qus1}  </Card.Title>
    <Card.Text as="h4" className="mb-2 " style={{color:"red"}}> {data.Ans1} </Card.Text>
    <Card.Title>{data.Qus2}  </Card.Title>
    <Card.Text as="h4" className="mb-2" style={{color:"red"}}>{data.Ans2} </Card.Text>
    <Card.Title>{data.Qus3}  </Card.Title>
    <Card.Text as="h4" className="mb-2 " style={{color:"red"}}>{data.Ans3} </Card.Text>
    <Card.Title>{data.Qus4}  </Card.Title>
    <Card.Text as="h4" className="mb-2" style={{color:"red"}}>{data.Ans4} </Card.Text>
    <Card.Title>{data.Qus5}  </Card.Title>
    <Card.Text as="h4" className="mb-2 " style={{color:"red"}}>{data.Ans5} </Card.Text>
     </Card.Body>
</Card> </div>
    ))
  }
    </div>
  );
}}

export default FetchedQus;
