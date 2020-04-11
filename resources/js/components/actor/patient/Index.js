import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Patients from './List';
import Create from './Create';
import Update from './Update';

export default class Index extends Component {
    render (){ 
        return(
           <div>
               <Router>
                    <div>                      
                        <Route exact path='/patient' component={Patients} />
                        <Route exact path='/patient/create' component={Create} /> 
                        <Route exact path='/patient/:patient/update' component={Update} />  
                    </div>
               </Router>
           </div>
            );
    };
}
