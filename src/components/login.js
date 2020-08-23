import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user :[{
                username :"",
                password :""
            }]
          }
    }
    onChanged= (event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    onSubmit=(event)=>{
        event.preventDefault();
        this.props.history.push('/')
    }
    render() { 
        const {username, password} = this.state;
        return ( 
            <div >
            <div className="center">
                 <h3 className="circle"><b>Logo</b></h3>
            <hr/>
            <form onSubmit={this.onSubmit} >
            <div className="form-group"   >  
                        <input  name="username"  className="form-control"  onChange={this.onChanged}
                value={username} type="email" placeholder="Enter valid E-mail Id" pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$" required />
                        
                    </div>
                    <br/>
             <div className="form-group" >
                        
                        </div>
            <div className="form-group"  >  
                  <input name="password" onChange={this.onChanged} 
                value={password}  placeholder="Enter password" className="form-control" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                 title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required /> 
            
                    </div>
                    <br/>
                    
                    <button className="btn btn-primary btn-block"  type="submit" >Login</button>
                </form>
            </div>
            </div>
         );
    }
}
 
export default Login;