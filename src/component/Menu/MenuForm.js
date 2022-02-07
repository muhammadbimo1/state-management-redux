import { Component } from "react";
import { connect } from "react-redux";
import ActionType from "../../redux/GlobalActionType";

class MenuForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newItem: {

            },
            isDisabled:true,
            error:""
        }
    }
    handleChange = (e) => {
        //TODO:Validation
        this.setState({
            newItem: {
                ...this.state.newItem,
                [e.target.name]: e.target.value
            },
        })
        if (this.state.newItem.name && this.state.newItem.price) {
            this.setState({
                isDisabled: false,
                error: ""
            })
        } else {
            this.setState({
                isDisabled: true,
                error: "Fill All Fields!"
            })
        }
    }

    handleClick = (e) => {
        this.props.handleAdd(this.state.newItem);
    }

    handleClickDelete = (e) => {
        this.props.handleDelete(e.target.name);
    }

    render() {
        return (
            <>
                <div>
                    <form>
                        <div className="form-group">
                            <input type="text" name="name" id="name" placeholder="Name" onChange={this.handleChange} /> <br />
                            <input type="number" name="price" id="price" placeholder="Price" onChange={this.handleChange} /> <br />
                        </div>
                    </form>
                </div>
                <p style={{color:"red"}}>{this.state.error}</p>
                <div className="m-3">
            <button className="btn btn-primary" disabled={this.state.isDisabled} onClick={this.handleClick}>Submit</button> 
                <button className="btn btn-danger m-3" onClick={this.props.handleCancel}>Cancel</button>
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        number: state.globalNumber
    }
} //Map State to props. Get GlobalNumber directly from Index.js 

const mapDispatchToProps = (dispatch) => {
    return {
        handleAdd: (item) => {
            console.log(item);
            dispatch({ type: ActionType.ADD_MENU, payload: item })
        },
        handleCancel: () => {
            dispatch({ type: ActionType.CLOSE_FORM})
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuForm);