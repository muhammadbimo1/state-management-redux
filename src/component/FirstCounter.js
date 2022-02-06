import { Component } from "react";
import { connect } from "react-redux";
import ActionType from "../redux/GlobalActionType";

class FirstCounter extends Component {
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
        this.props.handlePlus(this.state.newItem);
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
                            <input type="text" name="text" id="text" placeholder="text" onChange={this.handleChange} /> <br />
                        </div>
                    </form>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">text</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.number.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index+1}</th>
                                        <th scope="row">{item.text}</th>
                                        <button name={index} onClick={this.handleClickDelete}>DELETE</button>
                                    </tr>
                                )
                                    ;
                            })}
                        </tbody>
                    </table>
                </div>

                <button onClick={this.handleClick}>+</button>
                <button onClick={this.props.handleLogout}>LOGOUT</button>
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
        handlePlus: (text) => {
            console.log(text);
            dispatch({ type: ActionType.PLUS, payload: text })
        },
        handleDelete: (index) => dispatch({ type: ActionType.MINUS, index: index }),
        handleLogout: () => dispatch({ type: ActionType.LOGOUT})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstCounter);