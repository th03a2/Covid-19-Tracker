import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Employees from '../actor/employee/Index';
import Roles from '../actor/role/Index';
import Patients from '../actor/patient/Index';

export default class Header extends Component{
    render (){ 
        return(
           <Router>
               <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                    <button type="button" id="sidebarCollapse" className="btn btn-outline-info">
                    <i className="fas fa-align-left"></i>  
                    </button>
                    <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-align-left"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/roles">Test</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link " to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Settings <span className="fa fa-angle-double-down"></span>
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/patients">Patients</Link>
                                <Link className="dropdown-item" to="/employees">Employee</Link>
                                <Link className="dropdown-item" to="/roles">Roles</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="#">Something else here</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" to="#">Disabled</Link>
                            </li>
                            <li className="nav-item">
                                <a href="#" data-toggle="control-sidebar"><i className="fa fa-gear white fa-spin"></i></a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" id="key" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" id="look" type="submit">Search</button>
                        </form>
                    </div>
                    </div>
                </nav>
                <Route exact path='/patients' component={Patients} />
                <Route exact path='/employees' component={Employees} />
                <Route exact path='/roles' component={Roles} />
                </div>
           </Router>
        );
    };

}
