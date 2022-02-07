import { Component } from "react";
import { connect } from "react-redux";
import CustomerForm from "./CustomerForm";
import CustomerList from "./CustomerList";
class Customer extends Component {

    render() {
        return (
            <>
            {this.props.formOpen? <CustomerForm/> : <CustomerList/>}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        formOpen:state.formOpen
    }
} //Map State to props. Get GlobalNumber directly from Index.js 

export default connect(mapStateToProps)(Customer);