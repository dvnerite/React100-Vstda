import React, { Component } from 'react';
import ViewItems from './viewitems.jsx'

class AddItem extends Component {

  constructor () {
    super() 

    this.state = {
      
    }

  }

  render() {
    return (
        <div className="container-fluid">
            <div className="row">
            <div className="col-sm-3">
        <div className="card card-default">
         <div className="card-header">Add New To-Do</div>
          <div className="card-body">
           <h5 className="card-title">What Would You Like To Do?</h5>
             <textarea className='addToDo'></textarea>
           <h5 className="card-title">How Much Of A Priority Is This?</h5>
             <select>
                <option>Select Priority Level</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
        </div>
        <div className="card-footer">
             <button>Add To List!</button>
        </div>

           <ViewItems></ViewItems>

            </div>
            </div>
            </div>


            <div class="col-sm-6">
            <div className="card container fluid">
            <div className="card-header">View ToDo List</div>

            </div>
            </div>
            </div>

    );
  }
}
export default AddItem;