import React, { Component } from 'react';
import Input from './inputField';
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username: '',
            password: ''
        }
    }

    propertyIn(property,val){
        this.setState({[property]:val})
    }

    render(){
        return (
          <div className="loginForm">
              <h2 className="login">
                L<span>O</span>GIN
              </h2>
              <form className="form-group mt-5 mb-5">
                    <Input
                        type='text' 
                        placeholder='Username' 
                        value={this.state.username}
                        onChange={(val)=>this.propertyIn('username',val)}
                    />

                    <Input 
                        type='password' 
                        placeholder='Password' 
                        value={this.state.password}
                        onChange={(val)=>this.propertyIn('password',val)}
                    />
                </form>
          </div>
        );
        
          
    }
}

export default Login;
