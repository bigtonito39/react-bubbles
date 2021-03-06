import React from "react";
import axios from "axios";

class Login extends React.Component {
    
    state = {
        credentials: {
            username:"",
            password:""
        }
    }; 

    handleChanges = event => {
        this.setState({
            credentials:{
                ...this.state.credentials,[event.target.name]: event.target.value
            }
        })
    }

    loginIn = event => {
        event.preventDefault()
        axios.post("http://localhost:5000/api/login", {
            username:this.state.credentials.username,
            password:this.state.credentials.password
        })
        .then(response => {
            //we are passing the token here through response.data.payload to gain access
            localStorage.setItem("token", response.data.payload)
            this.props.history.push("/protected")
            
        })
        .catch(error => console.log("get Token failed", error))
        
    }

    render() {
      
        return (
          
            <div className="friendsDiv">
           
            <p>Sign in Here To see the bubbles!</p>
            <form onSubmit={this.loginIn}>
                <input 
                type="text"
                name="username"
                value={this.state.credentials.username}
                onChange={this.handleChanges}
                placeholder="Enter Username"
                
                />
                 <input 
                type="text"
                name="password"
                value={this.state.credentials.password}
                onChange={this.handleChanges}
                placeholder="Enter Password"
                
                />
<button>Log In</button>

            </form>


            </div>
        )
    }
}

export default Login;