import React from 'react';
import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
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
    return ( <div>
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

