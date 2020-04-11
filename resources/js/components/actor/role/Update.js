import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import axios from 'axios';

export default class update extends Component{
    constructor(props)
    {
        super(props);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            role:[],
            // name:'',
            // display_name:'',
            // category:'',
            // hrsduty:0,
            // dayduty:0,
            // basicpay:0,
            // dailypay:1,
            // sss:0,
            // PHi:0,
            // COLA:0,
            // is_active:true,
            engrave:true
        }
    }

    componentDidMount()
        {
            let urlString = localStorage.getItem("url");
            axios.get(urlString+'/api/role/'+this.props.match.params.id+'/find')
            .then(response=>{
                // console.log(response.data);
                this.setState({role:response.data});
            })
            .catch(function (response) {
                //handle error
                console.log(response)
            });
        }

    changeHandler(e){
        console.log([role[e.target.name]])

        this.setState({[role[e.target.name]]:e.target.value}) 
    }

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
            console.log(this.state.role)
            axios.put(urlString+'/api/role/update', this.state.role, headers)
            .then(res=>console.log(res.data))
            .catch(function (response) {
                //handle error
                console.log(response)
            });
        }
    render (){ 
        const {name, display_name } = this.state.role
        return(
            <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">
                        <Link to="/roles" type="button" className="btn btn-primary" ><span className="fa fa-times" /></Link>
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
