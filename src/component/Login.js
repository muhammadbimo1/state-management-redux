//class 
import React, { Component } from 'react';
import { connect } from "react-redux";
import ActionType from "../redux/GlobalActionType";
// class App extends React.Component{
import 'bootstrap'
// }

class LoginScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
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
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' placeholder="Enter email" /> </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input type="password" className="form-control" id="password" placeholder="Password" name="password" />
                    </div>
                    <button type="submit" className="btn btn-primary mt-2 " onClick={this.props.handleLogin}>Login</button>
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
            dispatch({ type: ActionType.LOGIN})
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);