import { Component } from "react";
import { connect } from "react-redux";
import TableForm from "./TableForm";
import TableList from "./TableList";

class Table extends Component {

    render() {
        return (
            <>
            <h1>Tables</h1>
            {this.props.formOpen? <TableForm/> : <TableList/>}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        formOpen:state.formOpen
    }
}

export default connect(mapStateToProps)(Table);