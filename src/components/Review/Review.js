import React from 'react';
import {connect} from 'react-redux';
import {Component} from 'react';
import Axios from 'axios';

class Review extends Component {

    editClick = (event) => {
            console.log('value:' , event.target.value);
            this.props.history.push({
                pathname: `/${event.target.value}`,
                state: {
                    reviewButton: 'On'
                }
            });
    }

    getFeedback = () => {
        Axios.get('/feedback')
            .then((response) => {
                console.log('GET Success:', response);
                this.props.dispatch({
                    type: "GET_DATABASE",
                    payload: response.data
                })
            }).catch((error) => {
                console.log('GET Failure, Error:', error);
            })
    }

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
            this.getFeedback();
            this.props.history.push('/Submit');
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
                    <li>Feelings: {this.props.response.feelingsRating} <button onClick={this.editClick} value="">Edit</button></li>
                    <li>Understanding: {this.props.response.understandingRating} <button onClick={this.editClick} value="Understand">Edit</button></li>
                    <li>Support: {this.props.response.supportedRating} <button onClick={this.editClick} value="Support">Edit</button></li>
                    <li>Comments: {this.props.response.otherComments} <button onClick={this.editClick} value="Comments">Edit</button></li>
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