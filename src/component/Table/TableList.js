import { Component } from "react";
import { connect } from "react-redux";
import ActionType from "../../redux/GlobalActionType";

class TableList extends Component {

    handleClickDelete = (e) => {
        this.props.handleDelete(e.target.name);
    }

    render() {
        if (!this.props.tables.length) {
            return (
                <>
                    <p>Sorry, the list is empty.</p>
                    <button className="btn btn-primary" onClick={this.props.handleOpenForm}>ADD TABLE</button>
                </>
            )
        }
        return (
            <>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">ID</th>
                                <th scope="col">Number</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.tables.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <th scope="row">{item.id}</th>
                                        <th scope="row">{item.number}</th>
                                        <th style={item.status==='Available' ? {color:"blue"}:{color:"red"}} scope="row">{item.status}</th>
                                        <button name={index} onClick={this.handleClickDelete}>DELETE</button>
                                    </tr>
                                )
                                    ;
                            })}
                        </tbody>
                    </table>
                </div>
                <button className="btn btn-primary" onClick={this.props.handleOpenForm}>ADD TABLE</button>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tables: state.tables,
    }
} //Map State to props. Get GlobalNumber directly from Index.js 

const mapDispatchToProps = (dispatch) => {
    return {
        handleDelete: (index) => dispatch({ type: ActionType.DELETE_TABLE, index: index }),
        handleOpenForm: () => dispatch({ type: ActionType.OPEN_FORM })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableList);