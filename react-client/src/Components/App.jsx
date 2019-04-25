import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Switch, browserHistory } from 'react-router';
import Navigation from './HeaderComponent/NavBar';
import Header from './Headercomponent/Header';
import Footer from './FooterComponent/Footer';


{/*Navigation */}
class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header/>
          <Footer/>
        </div>
      </Router>
    )
  }
}
export default App;