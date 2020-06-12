import React from 'react';
import {connect} from 'react-redux';
import {Component} from 'react';

class Review extends Component {

    submitClick = (event) => {
        this.props.history.push('/submit');
    }

    //
    //{feelingsRating: "", understandingRating: "", supportedRating: "", otherComments: ""}

    render() {
        return (
            <section>
                <h2>Review Your Feedback:</h2>
                <ul>
                    <li>Feelings: {this.props.response.feelingsRating}</li>
                    <li>Understanding: {this.props.response.understandingRating}</li>
                    <li>Support: {this.props.response.supportedRating}</li>
                    <li>Comments: {this.props.response.otherComments}</li>
                </ul>
                <button onClick={this.submitClick}>Submit</button>
            </section>
        );
    }
}
const putReduxStateOnProps = (reduxState) => ({
    response: reduxState.responseReducer
})

export default connect(putReduxStateOnProps)(Review);