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
                        <Route exact path='/patients' component={Patients} />
                        <Route exact path='/patients/create' component={Create} /> 
                        <Route exact path='/patients/:patient/find' component={Update} />  
                    </div>
               </Router>
           </div>
            );
    };
}
