import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';  
function Createemployee(props) {  
  const [employee, setemployee] = useState({ 
                  Name: '', 
                  Department: '', 
                  Age: '', 
                  City: '', 
                  Country: '', 
                  Gender: '' });  
  const [showLoading, setShowLoading] = useState(false);  
  const apiUrl = "http://localhost:8000/api/employee/1/find";  
  
  const Insertemployee = (e) => {  
    e.preventDefault();  
    debugger;  
    const data = {  Name  : employee.Name, 
                    phone : employee.phone, 
                    email : employee.email, 
                    gender: employee.is_male };  
    axios.post(apiUrl, data)  
      .then((result) => {  
        console.log(result)
        props.history.push('/EmployeList')  
      });  
  };  
  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setemployee({...employee, [e.target.name]: e.target.value});  
  }  
  
  return (  
    <div className="app flex-row align-items-center">  
      <Container>  
        <Row className="justify-content-center">  
          <Col md="12" lg="10" xl="8">  
            <Card className="mx-4">  
              <CardBody className="p-4">  
                <Form onSubmit={Insertemployee}>  
                  <h1>Register</h1>  
                  <InputGroup className="mb-3">  
                    <Input type="text" name="Name" id="Name" placeholder="Name" value={employee.Name} onChange={ onChange }  />  
                  </InputGroup>    
                  <InputGroup className="mb-3">  
                    <Input type="text" placeholder="Phone" name="phone" id="phone"  value={employee.phone} onChange={ onChange }  />  
                  </InputGroup>   
                  <InputGroup className="mb-4">  
                    <Input type="text" placeholder="email" name="email" id="email" value={employee.email} onChange={ onChange } />  
                  </InputGroup>  
                  <InputGroup className="mb-4">   
                     <Input type="text" placeholder="gender" name="gender" id= "gender" value={employee.gender} onChange={ onChange } />  
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

export default Createemployee 