import React from 'react';
import {connect} from 'react-redux';
import {Component} from 'react';

class Submit extends Component {

    submitClick = (event) => {
        //this.props.history.push('/');
    }

    //
    //{feelingsRating: "", understandingRating: "", supportedRating: "", otherComments: ""}

    render() {
        return (
            <section>
                <h2>Review Your Feedback:</h2>
                <ul>
                    <li>{this.props.response.feelingsRating}</li>
                    <li>{this.props.response.understandingRating}</li>
                    <li>{this.props.response.supportedRating}</li>
                    <li>{this.props.response.otherComments}</li>
                </ul>
                <button onClick={this.submitClick}>Submit</button>
            </section>
        );
    }
}
const putReduxStateOnProps = (reduxState) => ({
    response: reduxState.responseReducer
})

export default connect(putReduxStateOnProps)(Submit);