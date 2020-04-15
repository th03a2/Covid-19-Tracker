import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Label, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  

function Create(props) {  
  const [role, setModel] = useState({ 
            name: '', 
            display_name: '', 
            category: '', 
            basicpay: 0, 
            SSS: 0, 
            PHi: 0 }); 
  const [showLoading, setShowLoading] = useState(false);  

  const insert = (e) => {  
    e.preventDefault();  
    debugger;   
    axios.post(`./api/roles/save`, role)  
      .then(() => {  props.history.push('/roles') });  
  };  
  const onChange = (e) => { e.persist(); debugger; setModel({...role, [e.target.name]: e.target.value}); }  
  return (  
        <div className="app flex-row align-items-center">  
          <Container>  
            <Row className="justify-content-center">  
              <Col md="12" lg="10" xl="8">  
                <Card className="mx-4">  
                  <CardBody className="p-4">  
                    <Form onSubmit={insert}>  
                      <h1>Register</h1>  
                      <InputGroup className="mb-3">  
                        <Input type="text" name="name" id="name" placeholder="Name" value={role.name} onChange={ onChange }  />  
                      </InputGroup>  
                       <InputGroup className="mb-3">  
                        <Input type="text" placeholder="Display name" name="display_name" id="display_name" value={role.display_name} onChange={ onChange }/>  
                      </InputGroup>  
                      <InputGroup className="mb-3">  
                        <Input type="text" placeholder="Category" name="category" id="category"  value={role.category} onChange={ onChange }  />  
                      </InputGroup> 
                      <InputGroup className="mb-4"> 
                      <Label>Basic Pay :</Label>  
                    <Input type="number" placeholder="basicpay" name="basicpay" id="basicpay" value={role.basicpay} onChange={ onChange }  />  
                  </InputGroup>  
                  <InputGroup className="mb-4">  
                  <Label>SSS :</Label>
                    <Input type="number" placeholder="SSS" name="SSS" id="SSS" value={role.SSS} onChange={ onChange } />  
                  </InputGroup>  
                  <InputGroup className="mb-4">  
                  <Label>Phil. Health :</Label>  
                     <Input type="number" placeholder="PHi" name="PHi" id= "PHi" value={role.PHi} onChange={ onChange } />  
                  </InputGroup>   
             <CardFooter className="p-4">  
                <Row>  
                  <Col xs="12" sm="6">  
                    <Button type="submit" className="btn btn-info mb-1" block><span>Save</span></Button>  
                  </Col>  
                  <Col xs="12" sm="6">  
                    <Button className="btn btn-info mb-1" block><span>Cancel</span></Button>  
                  </Col>  
                  </Row>  
              </CardFooter>  
                </Form>  
              </CardBody>  
            </Card>  
          </Col>  
        </Row>  
      </Container>  
    </div>  
  )  
}  

export default Create