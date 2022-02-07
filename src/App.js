import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import ActionType from "./redux/GlobalActionType";
import LoginScreen from './component/Login';
import Home from './component/Home';
// Notice how we don't pass anything thru the app.js

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.isLoggedIn ? <Home /> : <LoginScreen/>}
      </div>
    );
  }

}



const mapStateToProps = (state) => {
  return {
      number: state.globalNumber,
      isLoggedIn: state.isLoggedIn
  }
} //Map State to props. Get GlobalNumber directly from Index.js 

const mapDispatchToProps = (dispatch) => {
  return {
      handlePlus: (text) => {
          console.log(text);
          dispatch({ type: ActionType.PLUS, payload: text })
      },
      handleDelete: (index) => dispatch({ type: ActionType.MINUS, index: index }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
