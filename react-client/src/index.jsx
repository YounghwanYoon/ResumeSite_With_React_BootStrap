import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';


const SampleComponent = props => (
    <input type="text" onChange={props.onChange} value={props.value} />
  );
  
  class ParentComponent extends React.Component {
    constructor() {
      super();
      this.state = { value: '' };
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(e) {
      console.log(e.target.value);
      this.setState({ value: e.target.value });
    }
  
    render() {
      return (
        <SampleComponent
          value={this.state.value}
          onChange={this.handleInputChange}
        />
      );
    }
  }
  



ReactDOM.render(<App />, document.getElementById('app'));