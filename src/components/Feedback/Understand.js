import React from 'react';
import {connect} from 'react-redux';
import {Component} from 'react';

class Understand extends Component {

    state = {
        response: ''
    }

    handleChange = (event) => {
        this.setState({
            response: event.target.value
        })
    }

    nextClick = (event) => {
        if(this.state.response === ''){
            alert('No Feedback Provided');
        }
        else{
        this.props.dispatch({
            type: "UNDERSTAND",
            payload: this.state.response
        })
        this.props.history.push('/Support');
        }
    }

    render() {
        return (
            <section>
                <h2>How well are you understanding the content?</h2>
                <label>Understanding?
                <input onChange={this.handleChange} className="inputBar" value={this.state.response}></input>
                </label>
                <button onClick={this.nextClick}>Next</button>
            </section>
        );
    }
}

export default connect()(Understand);