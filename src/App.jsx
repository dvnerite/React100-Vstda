import React, { Component } from 'react';
import AddItem from './additems.jsx'

class App extends Component {

  constructor () {
    super() 

    this.state = {

    }

  }





  render() {
    return (

      <div>
        <h1>Very Simple ToDo App!</h1>
        <hr></hr>
      <AddItem></AddItem>
    
      </div>
    );
  }
}

export default App;