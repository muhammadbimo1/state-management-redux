import { Component } from "react";
import { connect } from "react-redux";

class SecondCounter extends Component{
    render() {
        return(
            <>
            SecondCounter: {this.props.number}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        number: state.globalNumber
    }
}

export default connect(mapStateToProps)(SecondCounter);