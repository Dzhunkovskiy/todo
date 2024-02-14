import React, { Component } from 'react'
import { formatDistanceToNow } from 'date-fns'
import './task.css'

export default class Task extends Component {
    constructor() {
        super()

        this.state = {
            active: true,
        }

        this.onTaskClick = (e) => {
            if (e.target.classList.contains('description')) {
                if (this.state.active) {
                    this.setState({
                        active: false,
                    })
                    return
                }
                this.setState({
                    active: true,
                })
            }
        }
    }

    render() {
        const { id, className, name, deleteTask } = this.props
        const { active } = this.state
        let taskClassName = className
        if (!active) {
            taskClassName = 'completed'
        }
        if (active) {
            taskClassName = className
        }
        return (
            <li className={taskClassName} onClick={this.onTaskClick} id={id}>
                <div className='view'>
                    <input className='toggle' type='checkbox' />
                    <label>
                        <span className='description'>{name}</span>
                        <span className='created'>
                            created{' '}
                            {formatDistanceToNow(new Date(), {
                                addSuffix: true,
                            })}
                        </span>
                    </label>
                    <button className='icon icon-edit'></button>
                    <button
                        className='icon icon-destroy'
                        onClick={deleteTask}
                    ></button>
                </div>
                <input
                    type='text'
                    className='edit'
                    defaultValue={'Editing task'}
                />
            </li>
        )
    }
}
