import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {connect} from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feelings from '../Feedback/Feelings'
import Understanding from '../Feedback/Understand'
import Support from '../Feedback/Support'
import Comments from '../Feedback/Comments'
import Review from '../Review/Review'
import Submit from '../Submitted/Submitted'
import Admin from '../Admin/Admin'

class App extends Component {

  componentDidMount() {
    this.getFeedback();
  }

  getFeedback = () => {
      axios.get('/feedback')
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Router>
        <Route exact path="/" component={Feelings} />
        <Route path="/Understand" component={Understanding} />
        <Route path="/Support" component={Support} />
        <Route path="/Comments" component={Comments} />
        <Route path="/Review" render={(props) => <Review getFeedback={this.getFeedback}/>}/>
        <Route path="/Submit" component={Submit} />
        <Route path="/Admin" render={(props) => <Admin getFeedback={this.getFeedback}/>} />
        </Router>
      </div>
    );
  }
}

export default connect()(App);
