//class 
import React, { Component } from 'react';
import { connect } from "react-redux";
import ActionType from "../redux/GlobalActionType";
// class App extends React.Component{
  import 'bootstrap/dist/css/bootstrap.min.css';
  import validator from 'validator';
// }

class LoginScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      isDisabled:true,
      errorEmail:"",
      errorPassword:""
    }
  }

  handleChange = (e) => {
    //TODO:Validation
    this.setState({
        ...this.state,
        [e.target.name]: e.target.value
    })
    if (validator.isEmail(this.state.email)) {
      this.setState({
        isDisabled: false,
        errorEmail: ""
      })
    } else {
      this.setState({
        isDisabled: true,
        errorEmail: "invalid email Format"
      })
    }
    console.log(this.state);
  }

  clickLogin = (e) => {
    let correctLogin = {
      email: 'admin@example.com',
      password: '12345678'
    }
    e.preventDefault();
    if (this.state.email !== correctLogin.email && this.state.password !== correctLogin.password) {
      alert("invalid username or password");
    } else {
      this.props.handleLogin();
    }
  }



  render() {
    return (
      <div>
        <div className="video-background-holder">
          <div className="video-background-overlay"></div>
          <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
            <source src="https://mdbootstrap.com/img/video/Lines.mp4" type="video/mp4" />
          </video>
          <div className="video-background-content container h-100">
            <div className="d-inline-flex h-100 align-items-center">
              <div className="card" style={{ opacity: "80%", backdropFilter: "blur(14px)", backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                <div className='card-body text-white'>
                  <h5>Login</h5>
                  <form className='mb-2'>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' placeholder="Enter email" onChange={this.handleChange}/> </div>
                      <p style={{color:"red"}}>{this.state.errorEmail}</p>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input type="password" className="form-control" id="password" placeholder="Password" name="password" onChange={this.handleChange}/>
                      <p style={{color:"red"}}>{this.state.errorPassword}</p>
                    </div>
                    <button type="submit" disabled={this.state.isDisabled} className="btn btn-primary mt-2 " onClick={this.clickLogin}>Login</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.globalNumber
  }
} //Map State to props. Get GlobalNumber directly from Index.js 

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: () => {
      dispatch({ type: ActionType.LOGIN })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);