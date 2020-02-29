import React, { Component } from 'react';

class AddItems extends Component {

  constructor (props) {
    super(props); 

    this.state = {
      index: '',
      desc: '',
      priority: '',
      tasks: []
    };

   this.handleUpdateTextarea = this.handleUpdateTextarea.bind(this);
   this.handleChange = this.handleChange.bind(this)
  }


  handleUpdateTextarea(e) {

    
      this.setState({desc: e.target.value});
  }
  
  handleChange(e) {
    
  
      this.setState({priority: e.target.value});
      
    };

  render() {
    
    return (
      <div>
        <div className="container-fluid">
           <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="form-group">
                <div className="card-header">Add New To-Dos!</div>
                  <div className="card-body">
                    <h5 className="card-title">What Would You Like To Do?</h5>
                    <textarea 
                    className="create-todo-text form-control"
                    id="textArea"
                    rows="3"
                    onChange={this.handleUpdateTextarea}

                    ></textarea>
                    <div className="form-group">
                    <label htmlFor="priority"/>How Much Of A Priority Is This?
                    <select
                      className="create-todo-priority form-control"
                      id="priority"
                      onChange={this.handleChange}
                    >
                        <option defaultValue>Select Priority Level</option>
                        <option value="1">Low</option>
                        <option value="2">Medium</option>
                        <option value="3">High</option>
                    </select>
                   </div>  
                  </div>
                  <div className="card-footer">
                    <div className="form-group"></div>
                 <button 
                  className="create-todo btn btn-success" 
                  value="0" 
                  onClick={() => {this.props.addTask(this.state.desc, this.state.priority)}}
                  >Add To List!</button>
                </div>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
    );
  }
}
export default AddItems;