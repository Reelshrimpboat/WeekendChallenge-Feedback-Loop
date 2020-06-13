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
        if (this.state.response === '') {
            alert('No Feedback Provided');
        } else {
        this.props.dispatch({
            type: "FEELINGS",
            payload: this.state.response
        })
        this.props.history.push('/Understand');
        }
    }

    reviewReturn = () => {
        if (this.state.response === '') {
            alert('No Feedback Provided');
        } else {
            this.props.dispatch({
                type: "FEELINGS",
                payload: this.state.response
        })
        this.props.history.push('/Review');
    }}

    render() {
        return (
            <section>
                <h2>How are you feeling today?</h2>
                <label>Feelings:
                <input
                type="number"
                min="1"
                max="5"
                onChange={this.handleChange}
                className="inputBar">
                </input>
                </label>
                {this.props.location.state ?
                <button onClick={this.reviewReturn}>Back to Review</button>
                    :
                <button onClick={this.nextClick}>Next</button>
                }
            </section>
        );
    }
}

export default connect()(Feelings);