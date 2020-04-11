import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
function Update(props) { 
        const [patient, setpatient]= useState({
                    Id:'',
                    fname: '', 
                    mname: '', 
                    lname: '', 
                    suffix: '', 
                    dob: '', 
                    phone: '',
                    gender:''});  
        const Url = "http://localhost:800/api/patient/" + props.match.params.id+"/find";  
        useEffect(() => {  
          const GetData = async () => {  
            const result = await axios(Url);  
            setpatient(result.data);  
          };  
          GetData();  
        }, []);  

        const Updatepatient = (e) => {  
          e.preventDefault();  
          const data = {
              fname : patient.fname, 
              mname : patient.mname, 
              lname : patient.lname, 
              suffix:patient.suffix, 
              dob   : patient.dob, 
              phone : patient.phone,
              gender: patient.gender };  
          axios.post('http://localhost:800/api/patient/'+props.match.params.id+'/update', data)  
            .then((result) => {  
              props.history.push('/List')  
            });  
        };  
        
        const onChange = (e) => {  
          e.persist();  
          setpatient({...patient, [e.target.name]: e.target.value});  
        }  
        
        return (  
                <div className="app flex-row align-items-center">  
                <Container>  
                  <Row className="justify-content-center">  
                    <Col md="12" lg="10" xl="8">  
                      <Card className="mx-4">  
                        <CardBody className="p-4">  
                          <Form onSubmit={Updatepatient}>  
                            <h1>Update Patient</h1>  
                            <InputGroup className="mb-3">  
                              <Input type="text" name="fname" id="fname" placeholder="Given Name" value={patient.fname} onChange={ onChange }  />  
                            </InputGroup>  
                             <InputGroup className="mb-3">  
                              <Input type="text" placeholder="middle name" name="mname" id="mname" value={patient.mname} onChange={ onChange }/>  
                            </InputGroup>  
                            <InputGroup className="mb-3">  
                              <Input type="text" placeholder="last name" name="lname" id="lname"  value={patient.lname} onChange={ onChange }  />  
                            </InputGroup>  
                            <InputGroup className="mb-4">  
                              <Input type="text" placeholder="Suffix" name="suffix" id="suffix" value={patient.suffix} onChange={ onChange }  />  
                            </InputGroup>  
                            <InputGroup className="mb-4">  
                              <Input type="date" placeholder="dob" name="dob" id="dob" value={patient.dob} onChange={ onChange } />  
                            </InputGroup>  
                            <InputGroup className="mb-4">   
                               <Input type="text" placeholder="Phone number" name="phone" id= "phone" value={patient.phone} onChange={ onChange } />  
                            </InputGroup>   
                            <InputGroup className="mb-4">   
                               <Input type="text" placeholder="Gender" name="gender" id= "gender" value={patient.gender} onChange={ onChange } />  
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

export default Update  


