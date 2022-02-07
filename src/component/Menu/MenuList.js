import { Component } from "react";
import { connect } from "react-redux";
import ActionType from "../../redux/GlobalActionType";

class MenuList extends Component {

    handleClickDelete = (e) => {
        this.props.handleDelete(e.target.name);
    }

    render() {
        if (!this.props.menus.length) {
            return (
                <>
                            <p>Sorry, the list is empty.</p>
                            <button className="btn btn-primary" onClick={this.props.handleOpenForm}>ADD MENU</button>
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
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.menus.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index+1}</th>
                                        <th scope="row">{item.name}</th>
                                        <th scope="row">{item.price}</th>
                                        <th className="btn btn-outline-danger" name={index} onClick={this.handleClickDelete}>DELETE</th>
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
        menus: state.menus,
    }
} //Map State to props. Get GlobalNumber directly from Index.js 

const mapDispatchToProps = (dispatch) => {
    return {
        handleDelete: (index) => dispatch({ type: ActionType.DELETE_MENU, index: index }),
        handleOpenForm: ()=> dispatch({type:ActionType.OPEN_FORM})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);