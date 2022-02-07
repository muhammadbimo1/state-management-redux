import { Component } from "react";
import { connect } from "react-redux";
import ActionType from "../../redux/GlobalActionType";

class TableForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newItem: {},
            isDisabled:true,
            Error:"Fill All Fields!"
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
        if (this.state.newItem.id&&this.state.newItem.number&&this.state.newItem.status) {
            this.setState({
              isDisabled: false,
              error: ""
            })
          } else {
            this.setState({
              isDisabled: true,
              error: "Required Field!"
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
                            <input type="text" name="id" id="id" placeholder="id" onChange={this.handleChange} /> <br />
                            <input type="text" name="number" id="number" placeholder="number" onChange={this.handleChange} /> <br />
                            <select id="status" name="status" onChange={this.handleChange}>
                                <option value="Available">Available</option>
                                <option value="Unavailable">Unavailable</option>
                            </select> <br/>
                        </div>
                    </form>
                    <p style={{color:"red"}}>{this.state.error}</p>
                </div>
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
            dispatch({ type: ActionType.ADD_TABLE, payload: item })
        },
        handleCancel: () => {
            dispatch({ type: ActionType.CLOSE_FORM})
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableForm);