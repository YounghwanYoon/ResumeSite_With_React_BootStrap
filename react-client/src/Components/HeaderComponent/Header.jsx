
import React, { Component } from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import ErrorBoundary from './ErrorBoundary';


class Header extends Component {
  render() {
    return (
      <Header className= "mainHeader" style={{alignSelf: 'flex-end'}}>
        <ErrorBoundary>
          <Logo/>
          <NavBar/>
        </ErrorBoundary>
      </Header>
    )
  }
}
export default Header;