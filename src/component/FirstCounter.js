import { Component } from "react";
import { connect } from "react-redux";
import ActionType from "../redux/GlobalActionType";

class FirstCounter extends Component {
    render() {
        return (
            <>
                FirstCounter: {this.props.number}<br/>
                <button onClick={this.props.handlePlus}>+</button>
                <button onClick={this.props.handleMinus}>-</button>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        number: state.globalNumber
    }
} //Map State to props. Get GlobalNumber directly from Index.js 

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus : () => dispatch({type: ActionType.PLUS}),
        handleMinus : () => dispatch({type: ActionType.MINUS})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FirstCounter);