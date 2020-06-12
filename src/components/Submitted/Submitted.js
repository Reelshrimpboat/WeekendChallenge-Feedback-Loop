import React from 'react';
import {connect} from 'react-redux';
import {Component} from 'react';

class Understand extends Component {

    restartClick = (event) => {
        this.props.history.push('/');
    }

    render() {
        return (
            <section>
                <h3>Submission Success!</h3>
                <h2>Thank You!</h2>
                <button onClick={this.restartClick}>Leave New Feedback</button>
            </section>
        );
    }
}

export default connect()(Understand);