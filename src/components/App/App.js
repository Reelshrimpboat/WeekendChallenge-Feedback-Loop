import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feelings from '../Feedback/Feelings'
import Understanding from '../Feedback/Understand'
import Support from '../Feedback/Support'
import Comments from '../Feedback/Comments'
import Review from '../Review/Review'

class App extends Component {
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
        </Router>
      </div>
    );
  }
}

export default App;
