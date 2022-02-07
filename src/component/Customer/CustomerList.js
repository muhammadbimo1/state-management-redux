import { Component } from "react";
import { connect } from "react-redux";
import ActionType from "../../redux/GlobalActionType";

class CustomerList extends Component {

    handleClickDelete = (e) => {
        this.props.handleDelete(e.target.name);
    }

    render() {
        if (!this.props.customers.length) {
            return (
                <>
                            <p>Sorry, the list is empty.</p>
                            <button onClick={this.props.handleOpenForm}>ADD MENU</button>
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
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.customers.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index+1}</th>
                                        <th scope="row">{item.id}</th>
                                        <th scope="row">{item.name}</th>
                                        <th scope="row">{item.email}</th>
                                        <th scope="row">{item.address}</th>
                                        <button name={index} onClick={this.handleClickDelete}>DELETE</button>
                                    </tr>
                                )
                                    ;
                            })}
                        </tbody>
                    </table>
                </div>
                <button onClick={this.props.handleOpenForm}>ADD MENU</button>
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
        handleDelete: (index) => dispatch({ type: ActionType.DELETE_CUSTOMER, index: index }),
        handleOpenForm: ()=> dispatch({type:ActionType.OPEN_FORM})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);