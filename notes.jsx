// class
// import React, { Component } from 'react'
// export default class Element extends Component {
//     render() {
//         const { variable1, variable2 = false } = this.props
//         return(
//             <span>text</span>
//         )
//     }
// }

// click
// import React, { Component } from 'react'
// export default class Element extends Component {
//     constructor() {
//         super()
//         this.onBtnClick = () => {
//             console.log(`Click on ${this.props.variable1}`)
//         }
//     }
//     render() {
//         const { variable1, variable2 = false } = this.props
//         return <button onClick={this.onBtnClick}>text</button>
//     }
// }

// state
import React, { Component } from 'react'
export default class Element extends Component {
    constructor() {
        super()
        this.changeBgColor = () => {
            this.setState({
                done: true,
            })
        }
        this.changeTextColor = () => {
            this.setState(({ done }) => {
                return {
                    done: !done,
                }
            })
        }
        this.state = {
            done: false,
        }
    }
    render() {
        const { variable1, variable2 = false } = this.props
        const { done } = this.state

        let classNames = 'btn-red'
        if (done) {
            classNames += 'btn-bg-blue'
        }
        return (
            <div>
                <button onClick={this.changeColor}>text</button>
                <button onClick={this.changeTextColor}></button>
            </div>
        )
    }
}
