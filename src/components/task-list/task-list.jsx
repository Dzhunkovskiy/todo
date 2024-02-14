import React, { Component } from 'react'
import Task from '../task'
import './task-list.css'

export default class TaskList extends Component {
    // constructor(props) {
    //     super(props)
    //     this.props = props
    // }
    createTodoListItems(data) {
        return data.map((e) => {
            return (
                <Task
                    key={e.id}
                    id={e.id}
                    active={e.status}
                    name={e.name}
                    deleteTask={this.props.deleteTask}
                />
            )
        })
    }
    render() {
        const todos = this.props['todos']['todoData']
        return <ul className='todo-list'>{this.createTodoListItems(todos)}</ul>
    }
}
