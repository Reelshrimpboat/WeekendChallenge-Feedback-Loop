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

    render() {
        return (
            <section>
                <h2>How well are you being supported?</h2>
                <label>Support:
                <input onChange={this.handleChange} className="inputBar" value={this.state.response}></input>
                </label>
                <button onClick={this.nextClick}>Next</button>
            </section>
        );
    }
}

export default connect()(Support);