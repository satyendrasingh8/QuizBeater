import React from "react"
import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'
import db from "../firebase"


class Q1 extends React.Component {
    
  state = {
    Qus1: '',
    Ans1: '',
  }
handleSubmit(e) {
    e.preventDefault()
    const { Qus1, Ans1 } = this.state
    db.collection("dailyquiz").add({
      timestamp:Date.now(),
      Qus1: this.state.Qus1,
      Ans1: this.state.Ans1,
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
    console.log(Qus1,Ans1);
     this.resetForm()
 }
resetForm() {
    this.setState({
      Qus1: '',
      Ans1: '',
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

<Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        
      </>
    )
  }

  }
  
export default Q1;