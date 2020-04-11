import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import List from './List';
import Create from './Create';

export default class Index extends Component{
    render (){ 
        return(
           <div>
               <Router>
                    <div>                      
                        <Route exact path='/employees' component={List} />
                        <Route exact path='/employees/create' component={Create} />
                    </div>
               </Router>
           </div>
            );
    };
}
