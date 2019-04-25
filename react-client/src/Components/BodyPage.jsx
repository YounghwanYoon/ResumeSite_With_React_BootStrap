import React, { Component } from 'react';
import Home from './BodyComponent/Home';
import Project from './BodyComponent/Project';
import Resume from './BodyComponent/Resume';
import Contact from './BodyComponent/Contact';

class BodyPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      clicked_List :""   
    };

    this.updateState.bind();
  }
  updateState(){

    this.setState(this.state.clicked_List = this.props.data.clicked_Value);
  }

  render_clicked(){
    switch(clicked_List){
      case "Home": 
        return <Home/>
      case "Projects": 
        return <Project/>
      case "Resume": 
        return <Resume/>
      
      default:
        return <Home/>
    }
  }  
/*
     <div className="mainContent" on>

      </div>
*/
  render() {
    return (
      <Home/>
      //this.render_clicked()
    )
  };

}
export default BodyPage;