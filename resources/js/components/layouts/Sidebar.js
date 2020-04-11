import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
// import Employees from '../actor/employee/Index';
// import Roles from '../actor/role/Index';

export default class Header extends Component{
    render (){ 
        return(
           <Router>
               <div>
               <ul className="list-unstyled components">
               <li className="header">MAIN NAVIGATION</li>
                <li>
                    <Link to="/home">
                        <i className="fas fa-home"></i>
                        Dashboard
                    </Link>
                </li>
                <li className="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                        <i className="fas fa-briefcase"></i>
                        Puchase Order
                    </a>
                    <ul className="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <Link to="#">Request</Link>
                        </li>
                        <li>
                            <Link to="#">Approved</Link>
                        </li>
                        <li>
                            <Link to="#">Received</Link>
                        </li>
                        <li>
                            <Link to="#">History</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                        <i className="fas fa-copy"></i>
                        Cashier
                    </a>
                    <ul className="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <Link to="#">Transactions</Link>
                        </li>
                        <li>
                            <Link to="#">Sales</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="#">
                        <i className="fa fa-circle-o text-blue"></i>
                        Lockscreen
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <i className="fas fa-question"></i>
                        FAQ
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <i className="fas fa-paper-plane"></i>
                        Contact
                    </Link>
                </li>
            </ul>

                {/* <Route exact path='/employees' component={Employees} />
                <Route exact path='/roles' component={Roles} /> */}
            </div>
           </Router>
        );
    };
}
