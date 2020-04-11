import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import axios from 'axios';

export default class Create extends Component{
    constructor()
    {
        super();
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            name:'',
            display_name:'',
            category:'',
            hrsduty:0,
            dayduty:0,
            basicpay:0,
            dailypay:1,
            sss:0,
            PHi:0,
            COLA:0,
            is_active:true,
            engrave:true
        }
    }

    changeHandler(e){
        console.log(response)
        this.setState({[e.target.name]:e.target.value})   }

    onSubmit(e)
    {
        e.preventDefault();
 
        let urlString = localStorage.getItem("url");
        var headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": urlString,
            "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
        }
       
        axios.post(urlString+'/api/role/save', this.state, headers)
        .then(res=>console.log(res.data))
        .catch(function (response) {
            //handle error
            console.log(response)
        });
    }
    render (){ 
        const {name, display_name } = this.state
        return(
            <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">
                        <Link to="/roles" type="button" className="btn btn-outline-primary" style={{position:"absolute"}}><span className="fa fa-angle-double-left" /></Link>
                        <h2 className="text-center">Role</h2>
                    </div>

                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label >Name</label>
                                <input type="text" 
                                        className="form-control" 
                                        name="name"
                                        value={name}
                                        onChange={this.changeHandler}
                                        aria-describedby="emailHelp" 
                                        placeholder="Enter name" />
                            </div>
                            <div className="form-group">
                                <label>Display name</label>
                                <input type="text" 
                                        className="form-control" 
                                        name="display_name" 
                                        value={display_name}
                                        onChange={this.changeHandler}
                                        placeholder="Display name" />
                            </div>
                            <button type="submit" className="btn btn-outline-primary form-control" >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    };
}
