import React from 'react';
import {connect} from 'react-redux';
import {Component} from 'react';


class Admin extends Component {

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
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.feedback.map((feedback) => 
                        <tr key={feedback.id}>
                            <td>{feedback.feeling}</td>
                            <td>{feedback.understanding}</td>
                            <td>{feedback.support}</td>
                            <td>{feedback.comments}</td>
                            <td><button>Delete</button></td>
                        </tr>
                        )}
                    </tbody>
                </table>
                </div>
            </section>
        );
    }
}


const putReduxStateOnProps = (reduxState) => ({
   feedback: reduxState.feedbackArrayReducer
})

export default connect(putReduxStateOnProps)(Admin);