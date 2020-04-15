import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import { Label, Button, Card, CardHeader, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap'; 
import {BrowserRouter as Link} from 'react-router-dom';

function Edit(props) {  
  const Url = `./../../api/roles/${props.match.params.id}/find`;
  const [role, setModel]= useState({
      name: '', 
      display_name: '', 
      category: '', 
      basicpay: 0, 
      SSS: 0, 
      PHi: 0 });  
   
  useEffect(() => { getModel(); }, []); 
  
  const Update = (e) => {  
    e.preventDefault();    
    axios.put(`./../../api/roles/${props.match.params.id}/update`, role)  
      .then(() => { props.history.push('/roles') });  
  };  

  const getModel = async () => { const result = await axios(Url); setModel(result.data);};
  const onChange = (e) => { e.persist(); setModel({...role, [e.target.name]: e.target.value}); }  
  return (  
        <div className="app flex-row align-items-center">  
          <Container>  
            <Row className="justify-content-center">  
              <Col md="12" lg="10" xl="8">  
                <Card className="mx-4">  
                <Form onSubmit={Update}>  
                  <CardHeader>
                    <Link to="/roles" type="button" className="btn btn-primary" ><span className="fa fa-times" /></Link>
                      <h2 className="text-center">Role</h2>
                  </CardHeader>
                  <CardBody className="p-4">  
                      
                    <InputGroup className="mb-3">  
                      <Input type="text" name="name" id="name" placeholder="Name" value={role.name} onChange={ onChange }  />  
                    </InputGroup>  
                    <InputGroup className="mb-3">  
                      <Input type="text" placeholder="Display Name" name="display_name" id="display_name" value={role.display_name} onChange={ onChange }/>  
                    </InputGroup>  
                    <InputGroup className="mb-3">  
                      <Input type="text" placeholder="Category" name="category" id="category"  value={role.category} onChange={ onChange }  />  
                    </InputGroup>  
                    <InputGroup className="mb-4"> 
                      <Label>Basic Pay :</Label> 
                      <Input type="number" placeholder="Basicpay" name="basicpay" id="basicpay" value={role.basicpay} onChange={ onChange }  /> 
                    </InputGroup>  
                    <InputGroup className="mb-4">  
                      <Label>SSS :</Label>
                      <Input type="number" placeholder="SSS" name="SSS" id="SSS" value={role.SSS} onChange={ onChange } />  
                    </InputGroup>  
                    <InputGroup className="mb-4">  
                      <Label>Phil. Health :</Label> 
                      <Input type="number" placeholder="PHi" name="PHi" id= "PHi" value={role.PHi} onChange={ onChange } />  
                    </InputGroup>   
                  </CardBody>  
                  <CardFooter className="p-4">  
                    <Row>  
                      <Col xs="12" sm="6">  
                        <Button type="submit" className="btn btn-info mb-1" block><span>Save</span></Button>  
                      </Col>  
                      <Col xs="12" sm="6">  
                        <Button className="btn btn-danger mb-1" block><span>Cancel</span></Button>  
                      </Col>  
                    </Row>  
                  </CardFooter>  
                  </Form>                
                </Card>  
              </Col>  
            </Row>  
          </Container>  
        </div>  
  )  
}  

export default Edit  