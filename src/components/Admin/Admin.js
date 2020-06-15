import React from 'react';
import {connect} from 'react-redux';
import {Component} from 'react';
import Axios from 'axios';


class Admin extends Component {

    deleteButton = (event) => {
        console.log('delete button clicked:' , event.target.id);
        
        Axios.delete(`/feedback/${event.target.id}`)
        .then((reponse) => {
            console.log('DELETE Success, Response:' , reponse);
            this.props.getFeedback();
        })
        .catch((error) => {
            console.log('DELETE Failure, Error:', error);
        })

    }

    reviewButton = (event) => {
        console.log('review button clicked:' , event.target.id , event.target.value);

        Axios.put(`/feedback/flag/${event.target.id}`, {flaggedStatus: event.target.value})
            .then((reponse) => {
                console.log('PUT Success, Response:', reponse);
                this.props.getFeedback();
            })
            .catch((error) => {
                console.log('PUT Failure, Error:', error);
            })
    }

      submitClick2 = (event) => {
          this.props.history.push('/Submit');
      }
      

    render() {
        return (
            <section>
                <h2>Admin</h2>
                <div className="wrapper">
                <table className="adminTable">
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Comprehension</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Delete</th>
                            <th>Needs Further Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.feedback.map((feedback) => 
                        <tr key={feedback.id} className={feedback.flagged=== true ? "flagged" : "unflagged"}>
                            <td>{feedback.feeling}</td>
                            <td>{feedback.understanding}</td>
                            <td>{feedback.support}</td>
                            <td>{feedback.comments}</td>
                            <td><button onClick={this.deleteButton} id={feedback.id}>Delete</button></td>
                            {feedback.flagged=== true ?
                            <td>Flagged for Review<br /><button onClick={this.reviewButton} id={feedback.id} value="false">Unflag</button></td>
                            :
                            <td><button onClick={this.reviewButton} id={feedback.id} value="true">Flag for Review</button></td>
                            }                        
                        </tr>
                        )}
                    </tbody>
                </table>
                <button onClick={this.submitClick2}>Submit2</button>
                </div>
            </section>
        );
    }
}


const putReduxStateOnProps = (reduxState) => ({
   feedback: reduxState.feedbackArrayReducer
})

export default connect(putReduxStateOnProps)(Admin);