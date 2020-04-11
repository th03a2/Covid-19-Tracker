import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import List from './List';
import Create from './Create';
import Update from './Update';


export default class Index extends Component{
    render (){ 
        return(
           <div>
               <Router>
                    <div>                      
                        <Route exact path='/home' component={List} />
                        <Route exact path='/roles/create' component={Create} />
                        <Route exact path='/roles/:id/find' component={Update} />
                    </div>
               </Router>
           </div>
            );
    };
}
