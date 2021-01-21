import React, { Component } from 'react'
import db from "../firebase"

import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'
class Q2 extends Component {
  state = {
    Qus1: '',
    Ans1: '',
    Qus2: '',
    Ans2: '',
  }
handleSubmit(e) {
    e.preventDefault()
    const { Qus1, Ans1, Qus2, Ans2 } = this.state
    db.collection("dailyquiz").add({
      timestamp:Date.now(),
      Qus1: this.state.Qus1,
      Ans1: this.state.Ans1,
      Qus2: this.state.Qus2,
      Ans2: this.state.Ans2,
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
    console.log(Qus1,Ans1,Qus2,Ans2);
     this.resetForm()
 }
resetForm() {
    this.setState({
      Qus1: '',
      Ans1: '',
       Qus2: '',
       Ans2: '',
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
                name="Ans2"
                className="text-primary"
                value={this.state.Ans2}
                placeholder="Answer 2"
                required
                onChange={this.handleChange.bind(this, 'Ans2')}
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
export default Q2;