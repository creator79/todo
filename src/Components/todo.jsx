import React, { Component } from 'react'

export default class todo extends Component {
    constructor() {
        super()
        this.state = {
            tasks: [{task:'checkmails',id:1},{task:'Read articles',id:2},{task:'Complete homework',id:3}],
            currTask: ''
    }
    
}
/*~~~~~~~~~~~~~~~~~~Javascript~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    handleChange = (e) => {
        this.setState({
            currTask: e.target.value
        })
    }

    handleSubmit = () => {
        this.setState({
            tasks: [...this.state.tasks, {task: this.state.currTask, id: this.state.tasks.length + 1}],
            currTask: ''
        })

    }
    handleDelete = (id) => {
        let narr = this.state.tasks.filter((taskObj) => {
            return taskObj.id != id
        })
        this.setState({
            tasks: [...narr]
        })
       
    }
/*~~~~~~~~~~~~~~~~~~Javascript~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  render() {
    console.log('render');
    return (
      <div>
       <input type="text"value={this.state.currTask}onChange={this.handleChange}/>
         <button onClick={this.handleSubmit}>Submit</button>
            <ul>
         {
              this.state.tasks.map((taskObj) => (
                <li key={taskObj.id}>
                    <p>{taskObj.task}</p>
                    <button onClick={()=>this.handleDelete(taskObj.id)}>Delete</button>
                </li>
              ))  
         }
            </ul>
      </div>
    )
  }
    }

