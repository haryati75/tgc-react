import React from 'react';

export default class TaskList extends React.Component {
    state = {
        'tasks': [
            {
                'id': 1,
                'description': 'Walk the dog',
                'done': false
            },
            {
                'id': 2,
                'description': 'Wash the car',
                'done': false
            },
            {
                'id': 3,
                'description': 'Clean the room',
                'done': true
            }
        ],
        'newTaskName': "",
        // remember the id of the task that the code is changing
        'taskBeingEdited': 0,
        // stores the new (i.e. modified) task name
        'editedTaskName': ""
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    processUpdateTask = () => {
        // the id of the task we want to update is stored in this.state.taskBeingEdited
        // the new name of the task is in this.state.editedTaskName

        // find the original task and make a clone of it, then apply the changes
        let originalTask = this.state.tasks.filter(t => t.id === this.state.taskBeingEdited)[0];
        let editedTask = { ...originalTask, description: this.state.editedTaskName };

        console.log(this.state.taskBeingEdited);

        let editedIndex = this.state.tasks.findIndex( t => t.id === this.state.taskBeingEdited);
        console.log(editedIndex);

        let clonedArray = [
            ...this.state.tasks.slice(0, editedIndex),
            editedTask,
            ...this.state.tasks.slice(editedIndex + 1)
        ]

        console.log(clonedArray);

        // we can set multiple properties in a state at one go
        this.setState({
            tasks : clonedArray,
            taskBeingEdited : 0,
            editedTaskName: ''
        })
    }

    renderTaskName (task) {
        // check if the current task we are rendering is not the same
        // as the one we are not editing
        if (this.state.taskBeingEdited !== task.id) {
            return <React.Fragment>{task.description}</React.Fragment>
        } else {
            // if the current task.id is the same as the task we are editing/modifying
            return (
                <React.Fragment key={task.id}>
                    <input type="text"
                        value={this.state.editedTaskName}
                        name="editedTaskName"
                        onChange={this.updateFormField}
                    />
                    <button onClick={this.processUpdateTask}>
                        Update
                    </button>
                    <button onClick={()=>{
                        this.setState({
                            taskBeingEdited: 0,
                            editedTaskName: ''
                        })
                    }}>
                        Cancel
                    </button>
                </React.Fragment>
            )
        }
    }

    renderTasks () {
        let taskJSX = this.state.tasks.map( eachTask => {
            return (
                <div className="card">
                    <div className="card-body">
                        <input type="checkbox"
                            checked={eachTask.done}
                            className="me-3"
                            // use onChange as proxy to pass the parameter
                            onChange={() => { 
                                this.updateDone(eachTask.id);
                            }}
                        />

                        {this.renderTaskName(eachTask)}
                        {/* {eachTask.description} */}

                        {
                            eachTask.id !== this.state.taskBeingEdited ?
                                <button onClick={()=> {
                                    this.setState({
                                        taskBeingEdited: eachTask.id,
                                        editedTaskName: eachTask.description
                                    })
                                }}>Edit</button> : null
                            
                        }

                        {
                            eachTask.id !== this.state.taskBeingEdited ?
                                <button onClick={()=>{
                                    this.deleteTask(eachTask.id)
                                }}>Delete</button> : null
                            
                        }

                    </div>
                </div>
            )
        })
        return taskJSX;
    }

    deleteTask = (taskId) => {
        let indexToDelete = this.state.tasks.findIndex( t => t.id === taskId);
        let clonedArray = [
            ...this.state.tasks.slice(0, indexToDelete),
            ...this.state.tasks.slice(indexToDelete+1)
        ]
        this.setState({
            tasks: clonedArray
        })
    }

    // elegant method -- See Paul's example on GitHub (tgc12-react/08-crud-list)
    updateDone = (taskId) => {
        
        //find the task that we want to modify from array
        let wantedTask = this.state.tasks.filter( function (task) {
            return task.id === taskId ? task : null;
        })[0];

        // clone the found task from the array
        // modify the cloned task
        let clonedTask = {...wantedTask};

        // invert the done property of the clonedTask checkbox
        clonedTask.done = !clonedTask.done;

        // find the position of the wanted task
        let indexToChange = this.state.tasks.findIndex(function (task) {
            return task.id === clonedTask.id;
        })

        // clone the array
        let clonedArray = [
            ...this.state.tasks.slice(0, indexToChange),
            clonedTask,
            ...this.state.tasks.slice(indexToChange+1)
        ]

        this.setState({
            tasks : clonedArray
        })
    }
   
    addTask = () => {
        // construct new Task
        let newTask = {
            'id': Math.floor(Math.random() * 10000 + 9999),
            'description': this.state.newTaskName,
            'done': false
        }

        // 1. clone array from state variable
        // 2. modify cloned array
        let clone = [...this.state.tasks, newTask]

        // 3. set cloned array back into state variable
        this.setState({
            'tasks': clone,
            'newTaskName': ""
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    {/* Form for the user to add a new task */}
                    <h2>Create New Task</h2>
                    <div>
                        <label className="form-label">Task Description</label>
                        <input className="form-control" 
                                type="text" name="newTaskName"
                                value={this.state.newTaskName}
                                onChange={this.updateFormField}
                        />
                    </div>
                    <button className="btn btn-primary my-3" 
                        onClick={this.addTask}>
                            Add
                    </button>

                    <h1>Task List:</h1>
                    {this.renderTasks()}
                   
                </div>
            </React.Fragment>
        )
    }
}