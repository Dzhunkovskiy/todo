import React, { Component } from 'react'
import TaskList from '../task-list'
import Footer from '../footer'
import todoData from '../todo-data'
import './main-section.css'

export default class MainSection extends Component {
    constructor() {
        super()
        this.state = { todoData }
        this.deleteTask = (e) => {
            this.setState(({ todoData }) => {
                const targetId = parseInt(e.target.parentNode.parentNode.id)
                console.log(targetId)
                const arrId = todoData.findIndex((el) => el.id === targetId)
                const before = todoData.slice(0, arrId)
                const after = todoData.slice(arrId + 1)

                const newArray = [...before, ...after]
                console.log(newArray)
                return {
                    todoData: newArray,
                }
            })
        }
    }

    render() {
        return (
            <section className='main'>
                <TaskList todos={this.state} deleteTask={this.deleteTask} />
                <Footer />
            </section>
        )
    }
}
