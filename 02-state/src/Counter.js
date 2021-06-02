import React from 'react'

export default class Counter extends React.Component {
    state = {
        number: 0
    }

    increment = () => {
        this.setState({
            number: this.state.number + 1 
        })
    }

    decrement = () => {
        if (this.state.number > 0) {
            this.setState({
                number: this.state.number -1
            })
        }
    }

    style = {
        color: "red",
        border: "3px solid green",
        padding: "3px",
        height: "40px",
        width: "40px",
        textAlign: "center"
    }

    render() {
        return (
            <React.Fragment>
                <div style={this.style}>{this.state.number}</div>
                <button onClick={this.increment}>+1</button>
                <button onClick={this.decrement}>-1</button>
            </React.Fragment>
        )
    }
}