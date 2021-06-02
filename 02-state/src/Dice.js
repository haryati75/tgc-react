import React from 'react'

export default class Dice extends React.Component {
    state = {
        "value" : 1
    }

    pickRandom () {
        return Math.floor(Math.random() * 6 + 1)
    }

    getDiceColor () {
        let diceColor = "black";
        if (this.state.value === 1) {
            diceColor = "red";
        } else if (this.state.value === 6) {
            diceColor = "green";
        }
        return diceColor;
    }

    rollDice = () => {
        this.setState({
            "value" : this.pickRandom()
        })
    }

    render () {
        return (
            <React.Fragment>
                <div style={{
                        border: "3px solid " + this.getDiceColor(),
                        padding: "3px",
                        height: "40px",
                        width: "40px",
                        textAlign: "center"
                }} onClick={this.rollDice} >
                    {this.state.value}
                </div>
            </React.Fragment>
        )
    }
}