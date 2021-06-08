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
        'newTaskName': ""
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
                        {eachTask.description}
                        <button onClick={()=>{
                            this.editTask(eachTask.id)
                        }}>Edit</button>

                        <button onClick={()=>{
                            this.deleteTask(eachTask.id)
                        }}>Delete</button>

                    </div>
                </div>
            )
        })
        return taskJSX;
    }

    editTask = (taskId) => {
        let modifiedIndex = this.state.tasks.findIndex (t => t.id === taskId);
        let originalTask = this.state.tasks[modifiedIndex];

        // ask user for the new task name
        let newTaskName = prompt("Enter the new name for the task");
        let modifiedTask = {...originalTask, description: newTaskName};

        // clone the original task and modify id
        let clonedArray = [
            ...this.state.tasks.slice(0, modifiedIndex),
            modifiedTask,
            ...this.state.tasks.slice(modifiedIndex+1)
        ]

        this.setState({
            tasks: clonedArray
        })
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
        // let wantedTask = null;
        // for (let task of this.state.tasks) {
        //     if (task.id === taskId) {
        //         wantedTask = task
        //     }
        // }
        let wantedTask = this.state.tasks.filter( function (task) {
            return task.id === taskId ? task : null;
        })[0];

        // clone the found task from the array
        // modify the cloned task
        let clonedTask = {...wantedTask};

        // invert the done property of the clonedTask object
        // if done is true, it will become false
        // if done is false, it will become true
        // if (clonedTask.done) {
        //   clonedTask.done = false;
        // } else {
        //   clonedTask.done = true;
        // }
        // same as:
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

    updateTaskName = (event) => {
        this.setState({
            'newTaskName': event.target.value
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
        // let clone = this.state.tasks.slice();
        // 2. modify cloned array
        // clone.push(newTask);

        // 1 and 2 combined:
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
                                onChange={this.updateTaskName}
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