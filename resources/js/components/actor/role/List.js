import React, { useState, useEffect} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import axios from 'axios';

function List(props) {  
  const [searchKey, setSearchKey] = useState('');
  const [roles, setData] = useState([]);  // Mapping
  useEffect(() => { 
    window.addEventListener('#key',getData())
    // getData(); 
  
  }, []); 

  const getData = async () => { const result = await axios('./api/roles',{key:searchKey}); setData(result.data); }; 
  const handleChange = e => { setSearchKey(e.target.value); console.log(searchKey); getData();};
  const edit = (id) => { props.history.push({  pathname: `./roles/${id}/edit`}); };
  const destroy = (id) => {  
    debugger;  
    axios.delete(`./api/roles/${id}/destroy`)  
         .then((result) => { props.history.push('/roles') });  
  };  

  return (  
    <div className="animated fadeIn">  
     <div className="row justify-content-center">
        <div className="col-md-10">
            <div className="card">
              <div className="card-header">
                <Link to="/roles/create">Create</Link>
                <h2 className="text-center">Position List</h2>
                <form className="form-inline my-2 my-lg-0">
                    <input 
                      className="form-control mr-sm-2" 
                      id="key" 
                      type="search" 
                      placeholder="Search" 
                      value={searchKey}
                      onChange={handleChange}
                      aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" id="look" type="submit">Search</button>
                </form>
              </div> 
              <div className="card-body">
                <table className="table"> 
                  <thead>  
                    <tr>  
                      <th>#</th>
                      <th>Name</th>  
                      <th>Display Name</th>   
                      <th>Category</th>  
                      <th>Action</th>  
                    </tr>  
                  </thead>  
                  <tbody>  
                    {  
                      roles.map((role, i) => {  
                        return <tr key={role.id} id={`role-${role.id}`}>  
                          <td>{++i}</td>
                          <td>{role.name}</td>  
                          <td>{role.display_name}</td>  
                          <td>{role.category}</td>   
                          <td>  
                            <div className="btn-group">  
                              <button className="btn btn-outline-info" onClick={() => { edit(role.id) }}><span className="fa fa-pencil"></span></button>  
                              <button className="btn btn-outline-danger" onClick={() => { destroy(role.id) }}><span className="fa fa-trash"></span></button>  
                            </div>  
                          </td>  
                        </tr>  
                      })
                    }  
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
// https://codesandbox.io/s/practical-nightingale-m2b5n?file=/src/index.js:507-523