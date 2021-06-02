import React from 'react';

export default class Counter2 extends React.Component {
    state = {
        number: 0,
        numberType: "Even"
    }

    increment = async () => {
        await this.setState({
            number: this.state.number + 1 
        })
        if (this.state.number % 2 === 0) {
            this.setState({
                numberType: "Even"
            })
        } else {
            this.setState({
                numberType: "Odd"
            })
        }
    }

    decrement = async () => {
        if (this.state.number > 0) {
            await this.setState({
                number: this.state.number - 1
            })
        }
        this.setState({
            numberType: this.state.number % 2 === 0 ? "Even" : "Odd"
        })
    }

    style = {
        color: (this.state.number % 2 === 0) ? "blue" : "red",
        border: "3px solid orange",
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
                <p>This number is: {this.state.numberType}</p>
            </React.Fragment> 
        )
    }
} 