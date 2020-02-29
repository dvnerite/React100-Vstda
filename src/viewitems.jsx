import React, { Component } from 'react';


class ViewItems extends Component {

  constructor (props) {
    super(props); 

    this.state = {

      desc: this.props.desc,
      priority: this.props.priority,
      completed: this.props.handleCompleted,
    };

    this.getAlertClass = this.getAlertClass.bind(this);
    // this.handleCompleted = this.handleCompleted.bind(this);
    //this.handleEdit = this.handleEdit.bind(this);
    //this.handleDelete = this.handleDelete.bind(this);
    this.strikeThru = this.strikeThru.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleCompleted= this.handleCompleted.bind(this);
    this.handleChange= this.handleChange.bind(this);
    this.handleUpdateTextarea = this.handleUpdateTextarea.bind(this);
  }

  handleSubmit() {
    //
  }


  strikeThru(completed){
    //console.log(handleCompleted);
    if(completed === true){
      console.log(completed);
      return'line-through'
    }else{
      return 'none'
    }
  }

  getAlertClass(priority) {
    // if (this.state.completed === true) {
    //   return 'alert-success';
    // }

console.log(priority);
    if (priority === '3') {
    return 'list-group-item-danger';
    }

    if (priority === '2') {
      return 'list-group-item-warning';
    }

    if (priority === '1') {
      return 'list-group-item-success'; 


    }
    return "list-group-item";
  }


  handleUpdateTextarea(e) {

    
    this.setState({desc: e.target.value});
}

handleChange(e) {
  

    this.setState({priority: e.target.value});
    
  };

  // handleCompleted() {
  //   !this.state.completed
  //   ? this.setState ({completed: true})
  //   : this.setState ({completed: false});

  //   if (this.state.completed === true) {
  //     this.getAlertClass();
  //   } else {
  //     this.getAlertClass();
  //   }
  // }


    //handleEdit() {
      //this.setState({editing: true});
    //}
    

  //editView() {

  //   if (!this.state.editing) {
      
  //   return (
  //         <div>
  //           <div className="form-group" >
  //           <label htmlFor="description"/> New Description
  //           <textarea 
  //            className="update-todo-text form-control"
  //            value={this.state.desc}
  //            onChange={this.handleDisplay('desc')}
  //            />
  //           </div>
  //           <div className="form-group">
  //             <label htmlFor="date" />Due Date
  //             <input className="update-todo-date form-control" id="date" />
  //            <label htmlFor="priority"/> New Priority
  //             <select
  //               className="form-control"
  //               id="priority"  
  //               value={this.state.priority}
  //               onChange={this.handleDisplay('priority')}
  //             >
  //                 <option value="0">Select Priority Level</option>
  //                 <option value="low">Low</option>
  //                 <option value="medium">Medium</option>
  //                 <option value="high">High</option>
  //             </select>
  //           </div>
  //         <button
  //           className="update-todo btn btn-success"
  //           onClick={this.handleSubmit.bind(this)}
  //           >Save</button>
  //   <div>
  //   <NewTask onNewTask={this.addTask} />
  //   <TasksList tasks={this.state.tasks} onRemovetask={this.removeTask} />
  // </div>
  // </div> 
    //}
    

    render() {

      return (
        <li className={`${this.getAlertClass(this.props.priority)}`}>
        {
           this.props.editing === true ?
          
          <div>
            <div className="form-group" >
              <label htmlFor="description"/> New Description
                <textarea 
                  className="update-todo-text form-control"
                  value={this.state.desc}
                  onChange={this.handleUpdateTextarea}
                />
            </div>
            <div className="form-group">
             <label htmlFor="priority"/> New Priority
              <select
                className="update-todo-priority form-control"
                id="priority"  
                value={this.state.priority}
                onChange={this.handleChange}
              >
                  <option defaultValue>Select Priority Level</option>
                  <option value="1">Low</option>
                  <option value="2">Medium</option>
                  <option value="3">High</option>
              </select>
            </div>
          <button
            className="update-todo btn btn-success"
            onClick={() => this.props.handleSaveEdit(this.state.desc, this.state.priority, this.props.myId)}
            >Save</button>
            <div>
              {/* <NewTask onNewTask={this.addTask} /> */}
              {/* <TasksList tasks={this.state.tasks} onRemovetask={this.removeTask} /> */}
            </div>}
          </div> 
        : 
            <div role="alert">
              <label className="form-check-label">
                <input type="checkbox" onClick={() => this.props.handleCompleted(this.props.completed)} />
                {this.props.desc}
              </label>
              <p style = {{textDecoration: this.strikeThru(this.props.completed)}}>{this.props.description}</p>
              <i 
                className="delete-todo glyphicon glyphicon-trash icon-right"
                onClick={() => this.props.handleDelete(this.props.myId)}
              />
              <i
                className="edit-todo glyphicon glyphicon-edit icon-right"
                onClick={() => this.props.editView(this.props.myId)}
              />
              {/* {this.render()} */}
            </div>

          }
        </li>
      )
  }
}
    
  
export default ViewItems;
 