import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/login';
import Header from './components/header';
import Page from './components/Page';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
    <div>
      <Router>
        <Header/>
        <Switch>
          
          <Route exact path="/" component={Page} />
          <Route exact path="/login" component={Login}/>
        </Switch>
      </Router>
    </div> );
  }
}

 
export default App;

