import React from "react"
import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'
import db from "../firebase"


class Q3 extends React.Component {
    
  state = {
    Qus1: '',
    Ans1: '',
    Qus2: '',
    Ans2: '',
    Qus3: '',
    Ans3: '',

  }
handleSubmit(e) {
    e.preventDefault()
    const { Qus1, Ans1, Qus2, Ans2,Qus3, Ans3 } = this.state
    db.collection("dailyquiz").add({
      timestamp:Date.now(),
      Qus1: this.state.Qus1,
      Ans1: this.state.Ans1,
      Qus2: this.state.Qus2,
      Ans2: this.state.Ans2,
      Qus3: this.state.Qus3,
      Ans3: this.state.Ans3,
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
    console.log(Qus1,Ans1,Qus2,Ans2,Qus3, Ans3);
     this.resetForm()
 }
resetForm() {
    this.setState({
      Qus1: '',
      Ans1: '',
       Qus2: '',
       Ans2: '',
       Qus3: '',
       Ans3: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
render() {
    return (
      <>
        
          <Form onSubmit={this.handleSubmit.bind(this)}>
            
<FormGroup controlId="formBasicName">
              <Label className="text-muted">Qus.1</Label>
              <Input
                type="text"
                name="Qus1"
                value={this.state.Qus1}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'Qus1')}
                placeholder="Question1"
                required
              />
            </FormGroup>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-muted">Ans.1</Label>
              <Input
                type="text"
                name="Ans1"
                value={this.state.Ans1}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'Ans1')}
                placeholder="Answer 1"
                required
              />
            </FormGroup>
<FormGroup controlId="formBasicSubject">
              <Label className="text-muted">Qus.2</Label>
              <Input
                type="text"
                name="Qus2"
                className="text-primary"
                value={this.state.Qus2}
                onChange={this.handleChange.bind(this, 'Qus2')}
                placeholder="Question 2"
                required
              />
            </FormGroup>
<FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Ans.2</Label>
              <Input
                type="text"
                name="message"
                className="text-primary"
                value={this.state.Ans2}
                placeholder="Answer 2"
                required
                onChange={this.handleChange.bind(this, 'Ans2')}
              />
            </FormGroup>
            <FormGroup controlId="formBasicSubject1">
              <Label className="text-muted">Qus.3</Label>
              <Input
                type="text"
                name="Qus3"
                className="text-primary"
                value={this.state.Qus3}
                onChange={this.handleChange.bind(this, 'Qus3')}
                placeholder="Question 3"
                required
              />
            </FormGroup>
<FormGroup controlId="formBasicMessage1">
              <Label className="text-muted">Ans.3</Label>
              <Input
                type="text"
                name="Ans3"
                className="text-primary"
                value={this.state.Ans3}
                placeholder="Answer 3"
                required
                onChange={this.handleChange.bind(this, 'Ans3')}
              />
            </FormGroup>
<Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        
      </>
    )
  }
  }
  
export default Q3;