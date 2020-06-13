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
        <Route exact path="/Understand" component={Understanding} />
        <Route exact path="/Support" component={Support} />
        <Route exact path="/Comments" component={Comments} />
        <Route exact path="/Review" component={Review} />
        <Route exact path="/Submit" component={Submit} />
        </Router>
      </div>
    );
  }
}

export default connect()(App);
