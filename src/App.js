import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './Pages/Homepage.js';
import About from './Pages/About.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';


//let homepage = new Homepage();
var loggedin = true;

class App extends React.Component {
  render(){
  return (
    <div className="App">
    <Router>
    <Switch>
      <Route path="/" component={Homepage} />
      <Route path="/about" component={About} />
    </Switch>
    </Router>
    </div>

  );
}
}

export default App;
