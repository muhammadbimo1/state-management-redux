import { Component } from "react";
import { connect } from "react-redux";
import ActionType from "../redux/GlobalActionType";
import Customer from "./Customer/Customer";
import HomeScreen from "./HomeScreen";
import Menu from "./Menu/Menu";
import Table from "./Table/Table";
class Home extends Component {

    render() {
        let showMenu = ""
        if (this.props.currentScreen === "menu") {
            showMenu = <Menu />
        } else if (this.props.currentScreen === "table") {
            showMenu = <Table/>
        }
        else if (this.props.currentScreen === "customer") {
            showMenu = <Customer/>
        }else{
            showMenu = <HomeScreen/>
        }
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-brand" onClick={this.props.HandleHome}>Bakari</button>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <button className="nav-item nav-link" onClick={this.props.HandleTable}>Tables</button>
                            <button className="nav-item nav-link" onClick={this.props.HandleMenu}>Menus</button>
                            <button className="nav-item nav-link" onClick={this.props.HandleCustomer}>Customers</button>
                            <button className="bton btn-danger" onClick={this.props.HandleLogout}>Logout</button>
                        </div>
                    </div>
                </nav>
                {showMenu}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentScreen: state.currentScreen
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);