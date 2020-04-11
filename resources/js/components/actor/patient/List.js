import React, { useState, useEffect} from 'react';
 
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import axios from 'axios';

function List(props) {  
  const [employees, setData] = useState([]);  
    
  useEffect(() => {  
    const GetData = async () => {  
        const result = await axios('http://localhost:8000/api/patient');  
        setData(result.data);  
      };  
          
     GetData();  
      }, []); 

  const destroy = (id) => {  
    debugger;  
    axios.delete('http://localhost:8000/api/patient/' + id +'/destroy')  
         .then((result) => {  
               props.history.push('/EmployeList')    
         });  
      };  
    
  const edit = (id) => {  
    props.history.push({  
          pathname: '/employees/' + id +'/find' 
        });  
    };  

  return (  
    <div className="animated fadeIn">  
     <div className="row justify-content-center">
            <div className="col-md-10">
                <div className="card">
                    <div className="card-header">
                    <Link to="/employees/create">Create</Link>
                    <h2 className="text-center">Patient List</h2>
                    </div> 
            <div className="card-body">
              <table className="table"> 
                <thead>  
                  <tr>  
                    <th>#</th>
                    <th>Name</th>  
                    <th>DOB</th>   
                    <th>Phone</th>  
                    <th>Action</th>  
                  </tr>  
                </thead>  
                <tbody>  
                  {  
                    employees.map((patient, idx) => {  
                      return <tr key={patient.id}>  
                        <td>{++idx}</td>
                        <td>{patient.fullname}</td>  
                        <td>{patient.dob}</td>  
                        <td>{patient.phone}</td>   
                        <td>  
                          <div className="btn-group">  
                            <button className="btn btn-warning" onClick={() => { edit(patient.id) }}>Edit</button>  
                            <button className="btn btn-warning" onClick={() => { destroy(patient.id) }}>Delete</button>  
                          </div>  
                        </td>  
                      </tr>  
                    })}  
                </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div> 
    </div>  
  )  
}

export default List 

// https://dzone.com/articles/crud-operations-using-reactjs-hooks-and-web-api