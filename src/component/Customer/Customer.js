import { Component } from "react";
import { connect } from "react-redux";
import ActionType from "../../redux/GlobalActionType";

class Customer extends Component {

    render() {
        return (
            <>
                Customer
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        customers: state.customers
    }
} //Map State to props. Get GlobalNumber directly from Index.js 

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: (text) => {
            console.log(text);
            dispatch({ type: ActionType.PLUS, payload: text })
        },
        handleDelete: (index) => dispatch({ type: ActionType.MINUS, index: index }),
        handleLogout: () => dispatch({ type: ActionType.LOGOUT})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customer);