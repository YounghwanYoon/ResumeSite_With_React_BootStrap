import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Switch, browserHistory } from 'react-router';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';
import Home from '../Components/BodyComponent/Home';
import Project from '../Components/BodyComponent/Project';
import Resume from '../Components/BodyComponent/Resume';
import Contact from "../Components/BodyComponent/Contact";

class App extends Component {

  render() {
    return (
      <Router>
        <div className="wrapper">
          <NavBar />
          <Switch>
            <Route name="body" Link="/Home"  exact path="/Home" component={Home} />
            <Route name="body" Link="/Project"  exact path="/Project" component={Project} />
            <Route name="body" Link="/Resume"  exact path="/Resume" component={Resume} />
            <Route name="body" Link="/Contact"  exact path="/Contact" component={Contact} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    )
  }
}
export default App;