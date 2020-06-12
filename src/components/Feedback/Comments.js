import React from 'react';
import {connect} from 'react-redux';
import {Component} from 'react';

class Comments extends Component {

    state = {
        response: ''
    }

    handleChange = (event) => {
        this.setState({
            response: event.target.value
        })
    }

    nextClick = (event) => {

        this.props.dispatch({
            type: "COMMENTS",
            payload: this.state.response
        })
        this.props.history.push('/Review');

    }

    render() {
        return (
            <section>
                <h2>Any other comments?</h2>
                <label>Comments:
                <input onChange={this.handleChange} className="inputBar" value={this.state.response}></input>
                </label>
                <button onClick={this.nextClick}>Next</button>
            </section>
        );
    }
}

export default connect()(Comments);