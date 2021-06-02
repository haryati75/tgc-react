import React from 'react';

export default class Fruit extends React.Component {
    state = {
        fruitName : "No Fruit selected"
    }

    componentDidMount(){
        console.log(1);
    }

    selectApple = () => {
        this.setState({
            fruitName: "Apple"
        })
    }

    selectBanana = () => {
        this.setState({
            fruitName: "Banana"
        })
    }


    render () {
        const style = {
            "height" : "40px",
            "width" : "100px",
            "border" : "3px dashed purple",
            "backgroundColor" : "yellow"
        }

        return (
            <React.Fragment>
                <p>The current fruit is: {this.state.fruitName}</p>
                <div style={style}>{this.state.fruitName}</div>
                <button onClick={this.selectApple}>Apple</button>
                <button onClick={this.selectBanana}>Banana</button>
                <button onClick={() => {
                    this.setState({
                        fruitName: "Carrot"
                    })
                }}>Carrot</button>
            </React.Fragment>
        )
    }
}