import { Component } from "react";
import { connect } from "react-redux";
import ActionType from "../../redux/GlobalActionType";

class CustomerList extends Component {

    handleClickDelete = (e) => {
        window.confirm('Are you sure you wish to delete this item?') ?  this.props.handleDelete(e.target.name) : this.handleCancel();
    }
    handleCancel = (e) => {
       
    }

    render() {
        if (!this.props.customers.length) {
            return (
                <>
                            <p>Sorry, the list is empty.</p>
                            <button className="btn btn-primary" onClick={this.props.handleOpenForm}>ADD CUSTOMER</button>
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
                                        <th className="btn btn-outline-danger" name={index} onClick={this.handleClickDelete}>DELETE</th>
                                    </tr>
                                )
                                    ;
                            })}
                        </tbody>
                    </table>
                </div>
                <button className="btn btn-primary" onClick={this.props.handleOpenForm}>ADD CUSTOMER</button>
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