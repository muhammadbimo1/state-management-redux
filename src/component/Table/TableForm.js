import { Component } from "react";
import { connect } from "react-redux";
import ActionType from "../../redux/GlobalActionType";

class TableForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newItem: {

            },
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
        console.log(this.state);
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
                </div>

                <button onClick={this.handleClick}>Submit</button>
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
            dispatch({ type: ActionType.ADD_TABLE, payload: item })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableForm);