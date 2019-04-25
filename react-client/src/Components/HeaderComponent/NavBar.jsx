import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import {Nav, Navbar, NavbarBrand,NavbarToggle, NavbarCollapse, NavbarToggle, NavLink, NavDropdown, NavDropdownItem,NavDropdownDivider} from'reactstrap';

class Navigation extends React.Component {

  constructor(props){
    super(props);
    this.state={
      clicked_Value:""
    };
    this.updateState = this.updateState.bind(this);
  }
  updateState(event) {
    const Link_id = event.target.id;
    //selecting parent element
    var selectedList = document.getElementById(Link_id).parentElement;
    //All list of navi bar
    var all_List = document.getElementById("main-nav-list").childNodes;

    //Update clicked_Value and id of selectedList
    this.setState({clicked_Value: "" + Link_id}, ()=>{
      
      //resetting list id to "not_selected"
      for(var i=0; i < all_List.length; i++){
        all_List[i].id="not_selected";
      }
      //Updating selected_List id
      switch(this.state.clicked_Value){
        case "Home": 
          selectedList.id = "selected";
        case "Project": 
          selectedList.id = "selected";
        case "Resume": 
          selectedList.id = "selected";
        case "Contact": 
          selectedList.id = "selected";
      }
      //<BodyPage data = {this.state}/>
     // helper(this.state.clicked_Value);
    });
  }
/*
  assign(){
    console.log("hello2");

    document.addEventListener('submit', fadeOut()); 
    onLoad= {this.assign} 
  }
*/
  render() {
    return (
      <Navbar className = "mainNav" bg="light" expand="lg">
        <NavbarBrand href="#home">React-Bootstrap</NavbarBrand>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink href="../BodyComponent/Home.jsx">Home</NavLink>
            <NavLink href="../BodyComponent/Resume.jsx">Resume</NavLink>
            <NavLink href="../BodyComponent/Contact.jsx">Contact</NavLink>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdownItem href="#action/3.1">Action</NavDropdownItem>
              <NavDropdownItem href="#action/3.2">Another action</NavDropdownItem>
              <NavDropdownItem href="#action/3.3">Something</NavDropdownItem>
              <NavDropdownDivider />
              <NavDropdownItem href="#action/3.4">Separated link</NavDropdownItem>
            </NavDropdown>
          </Nav>
        </NavbarCollapse>
      </Navbar>
    )
  }
}
export default Navigation;
