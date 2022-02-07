import { Component } from "react";
import { connect } from "react-redux";
import ActionType from "../../redux/GlobalActionType";
import MenuForm from "./MenuForm";
import MenuList from "./MenuList";

class Menu extends Component {

    render() {
        return (
            <>
            {this.props.formOpen? <MenuForm/> : <MenuList/>}
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu);