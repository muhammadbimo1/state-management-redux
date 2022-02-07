import { Component } from "react";
import { connect } from "react-redux";
import MenuForm from "./MenuForm";
import MenuList from "./MenuList";

class Menu extends Component {

    render() {
        return (
            <div>
                        <h1>Menu</h1>
            {this.props.formOpen? <MenuForm/> : <MenuList/>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        formOpen:state.formOpen
    }
} //Map State to props. Get GlobalNumber directly from Index.js 

export default connect(mapStateToProps)(Menu);