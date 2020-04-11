import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import axios from 'axios';



export default class List extends Component{
    constructor(props){
        super(props);
        this.state={
            query: '',
            roles: [],
            urlString: localStorage.getItem("url"),
            loading: false,
            show: false,
            message: ''
        }
    }

    handleOnInputChange (e){

    }

    componentDidMount()
    {
        // console.log(this.props);
        axios.get(this.state.urlString+'/api/role', key)
        .then(response=>{
            this.setState({roles:response.data}); 
        });
    }

    onDelete(pkey)
    {
        axios.delete(this.state.urlString+'/api/role/'+pkey+'/destroy')
        .then(response=>{
            // let roles = this.state.roles;
            this.setState({show:false});
            let id = "role"+pkey;
            $('#'+id).remove();
        });
    };

    render (){ 
        return(
            <div className="row justify-content-center">
                
                
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <Link to="/roles/create" style={{position:"absolute"}} className="btn btn-outline-primary"><span className="fa fa-plus"></span></Link>
                            <h2 className="text-center">Role</h2>
                        </div>

                        <div className="card-body">
                                <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Display Name</th>
                                        <th>Action</th>
                                    </tr>  
                                </thead>  
                                <tbody>
                                {
                                    this.state.roles.map((role, i)=>{
                                        return (
                                            <tr key={role.id} id={"role-" + role.id}>
                                                <td>{++i}</td>
                                                <td>{role.name}</td>
                                                <td>{role.display_name}</td>
                                                <td >
                                                <div className="btn-group">
                                                    <Link to={"/roles/"+role.id+"/find"} className="btn btn-info"><span className="fa fa-pencil-alt"></span></Link>
                                                    <button className="btn btn-danger" onClick={() => this.setState({ show: true })} type="submit"><span className="fa fa-trash"></span></button>
                            
                                                </div>
                                            </td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
        
    };
}
