import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

class NavBar extends React.Component {

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
      <header className="header">
        <Logo/>
        <nav className = "mainNav">
          <ul className="main-nav-list" id="main-nav-list">
            <li id="not_selected" ><Link to ="/Home" id="Home" onClick = {this.updateState}>Home</Link></li>
            <li id="not_selected"><Link to="/Project" id="Project" onClick = {this.updateState} >Projects</Link></li>
            <li id="not_selected"><Link to="/Resume" id="Resume" onClick = {this.updateState} >Resume</Link></li>
            <li id="not_selected"><Link to="/Contact" id="Contact" onClick = {this.updateState} >Contact</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}
export default NavBar;