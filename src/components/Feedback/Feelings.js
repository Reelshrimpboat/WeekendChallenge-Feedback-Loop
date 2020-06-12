import React from 'react';
import {connect} from 'react-redux';
import {Component} from 'react';

class Feelings extends Component {

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
            type: "FEELINGS",
            payload: this.state.response
        })
        this.props.history.push('/Understand');
    }

    render() {
        return (
            <section>
                <h2>How are you feeling today?</h2>
                <label>Feelings:
                <input onChange={this.handleChange} className="inputBar" value={this.state.response}></input>
                </label>
                <button onClick={this.nextClick}>Next</button>
            </section>
        );
    }
}

export default connect()(Feelings);