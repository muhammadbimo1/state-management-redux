import { Component } from "react";
import { connect } from "react-redux";
import ActionType from "../redux/GlobalActionType";
class HomeScreen extends Component {
    render() {
        return (
            <div>
                    HomeScreen
            </div>
        );
    }
}

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {
    return {
        HandleHome: () => dispatch({ type: ActionType.MOVE_HOME }),
        HandleMenu: () => dispatch({ type: ActionType.MOVE_MENU }),
        HandleTable: () => dispatch({ type: ActionType.MOVE_TABLE }),
        HandleCustomer: () => dispatch({ type: ActionType.MOVE_CUSTOMER }),
        HandleLogout: () => dispatch({ type: ActionType.LOGOUT })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);