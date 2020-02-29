import React, { Component } from 'react';
import AddItems from './additems.jsx'
import ViewItems from './viewitems.jsx'

let id = 0;
class App extends Component {

  constructor (props) {
    super(props) 

    this.state = {
      tasks: [],
      editing: false,
      completed: false,
    };

    this.addMyTask = this.addMyTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.editView = this.editView.bind(this);
    this.handleDelete=this.handleDelete.bind(this);
    this.handleSaveEdit = this.handleSaveEdit.bind(this);
    this.handleCompleted = this.handleCompleted.bind(this);
  }


  addMyTask (desc, priority) {
    this.setState(
      {
          tasks: [...this.state.tasks, {description: desc, myPriority: priority, myId: id, editing: false, completed: false}]
      }
    )
        id++
        console.log(desc, priority, id)
  }


  handleChange ({desc, priority, index}) {
    const tasks = [...this.state.tasks];
    tasks[index] = {index, desc, priority};
    this.setState({tasks});
  }

  editView(id) {
    console.log(id)
    console.log('Are you ready to edit?')
    this.setState(prevState => ({
      tasks: prevState.tasks.map(listItem => {
        if(listItem.myId == id){
          listItem.editing = !listItem.editing;
          console.log('Edit Status:', listItem.editing);
        }

        return listItem;

      })
    })
    )
    console.log(`tasks: `, this.state.tasks);
  };

  handleCompleted (id){
    console.log(id);
    let tempTasks = this.state.tasks;
    for (let i = 0; i < tempTasks.length; i++){
      if(tempTasks[i].myId === id){
        tempTasks[i].completed = !tempTasks[i].completed
        console.log('complete status:', completed)

      }
    };
  
    this.setState({tasks: tempTasks});
    console.log(this.state.tasks);
  }


  handleDelete (id){
    let tempTasks= this.state.tasks;
    for (let i = 0; i < tempTasks.length; i++){
      if(tempTasks[i].myId === id){
        tempTasks.splice(i, 1);
      }
    };
  
    this.setState({tasks: tempTasks});
    console.log(this.state.tasks);
  }

  handleSaveEdit(desc, priority, id){
    console.log(desc, priority, id);

    let tempTasks= this.state.tasks;
    for (let i = 0; i < tempTasks.length; i++){
      if(tempTasks[i].myId === id){
        tempTasks[i].description = desc;
        tempTasks[i].myPriority = priority;
        tempTasks[i].editing = false;
      }
    };
  
    this.setState({tasks: tempTasks});
    console.log(this.state.tasks);
  }




  render() {

    console.log('hey:', this.state.tasks)
    return (
        <div className="container fluid">
          <h1>Very Simple ToDo App!</h1>
             <div className="row">
               <AddItems 
                 addTask={this.addMyTask}
                handleChange={this.handleChange}

          />


        <div className="col-md-8">
        <div className="card card-default">
        <div className="card-heading">View To Do List</div>
        <div name="tasks" id="thetasks" value={this.setState}> {this.state.task} </div>
        <div className="card-body">
          {
          this.state.tasks.map((item, index) => {
            return (
              <ViewItems
                index={index}
                key={index}
                desc={item.description}
                priority={item.myPriority}
                myId={item.myId}
                editView={this.editView}
                completed={item.completed}
                handleChange={this.handleChange}
                editing = {item.editing}
                handleDelete = {this.handleDelete}
                handleSaveEdit= {this.handleSaveEdit}
                handleCompleted = {this.handleCompleted}
              />
            )
  })}
      </div>
      </div>
      </div>
      </div>
      </div>
      
    );
  }
}

export default App;
