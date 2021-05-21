import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
const url='https://api.quotable.io/random'
class App extends Component {
  state={
    quote:''
  }
  componentDidMount(){
    this.fetchAdvice()

  }
  fetchAdvice=()=>{
    axios.get(url)
    .then(res=>{
  this.setState({quote:res.data.content})
 
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  render() {
 
    console.log(this.state)
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.quote}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;

