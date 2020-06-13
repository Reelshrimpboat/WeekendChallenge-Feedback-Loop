import React from 'react';
import {connect} from 'react-redux';
import {Component} from 'react';
import Axios from 'axios';

class Review extends Component {

    submitClick = (event) => {
        let feedback = {
            feelingsRating: this.props.response.feelingsRating,
            understandingRating: this.props.response.understandingRating,
            supportedRating: this.props.response.supportedRating,
            otherComments: this.props.response.otherComments
        }
        console.log('submit click, feedback to send:' , feedback)
        Axios.post('/feedback', feedback)
        .then((response) => {
            console.log('Feedback POST Success:' , response)
            this.props.history.push('/submit');
        }).catch((error) => {
            console.log("Feedback POST Failure, Error:", error);
        })
        
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