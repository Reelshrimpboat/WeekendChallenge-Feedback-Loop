import React from 'react';
import {connect} from 'react-redux';
import {Component} from 'react';

class Support extends Component {

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
            type: "SUPPORT",
            payload: this.state.response
        })
        this.props.history.push('/Comments');
        }
    }

    reviewReturn = () => {
        if (this.state.response === '') {
            alert('No Feedback Provided');
        } else {
            this.props.dispatch({
                type: "SUPPORT",
                payload: this.state.response
            })
            this.props.history.push('/Review');
        }
    }

    render() {
        return (
            <section>
                <h2>How well are you being supported?</h2>
                <label>Support:
                <input
                type="number"
                min="1"
                max="5"
                onChange={this.handleChange}
                className="inputBar"
                value={this.state.response}>
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

export default connect()(Support);