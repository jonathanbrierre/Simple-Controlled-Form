import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  state = {
    firstName: '',
    lastName: ''
  }

  handleOnChange = (e) =>{
    this.setState({[e.target.name]:e.target.value})
  }

  render(){

      return (
        <div className="App">
            <form>
              First Name: <input type = 'text' name = 'firstName' value = {this.state.firstName} onChange = {this.handleOnChange}/> <br></br>
              Last Name: <input type = 'text' name = 'lastName' value = {this.state.lastName} onChange = {this.handleOnChange}/>
            </form>
        </div>
      );
  }
}

export default App;
