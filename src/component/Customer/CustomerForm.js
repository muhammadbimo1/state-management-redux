import { Component } from "react";
import { connect } from "react-redux";
import ActionType from "../../redux/GlobalActionType";
import validator from "validator";

class CustomerForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newItem: {

            },
            isDisabled:true,
            error:"",
            errorEmail:""
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
        if (this.state.newItem.id && this.state.newItem.name&&this.state.newItem.email&&this.state.newItem.address) {
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
        if (validator.isEmail(this.state.newItem.email)) {
            this.setState({
                isDisabled: false,
                error: ""
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
                            <input type="text" name="id" id="id" placeholder="ID" onChange={this.handleChange} /> <br />
                            <input type="text" name="name" id="name" placeholder="Name" onChange={this.handleChange} /> <br />
                            <input type="text" name="email" id="email" placeholder="Email" onChange={this.handleChange} /> <br />
                            <p style={{color:"red"}} >{this.state.errorEmail}</p>
                            <input type="text" name="address" id="address" placeholder="Address" onChange={this.handleChange} /> <br />
                        </div>
                    </form>
                </div>
            <p style={{color:"red"}} >{this.state.error}</p>
            <div className="m-3">
            <button className="btn btn-primary" disabled={this.state.isDisabled} onClick={this.handleClick}>Submit</button> 
                <button className="btn btn-danger m-3" onClick={this.props.handleCancel}>Cancel</button>
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {

} 

const mapDispatchToProps = (dispatch) => {
    return {
        handleAdd: (item) => {
            dispatch({ type: ActionType.ADD_CUSTOMER, payload: item })
        },
        handleCancel: () => {
            dispatch({type: ActionType.CLOSE_FORM})
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerForm);