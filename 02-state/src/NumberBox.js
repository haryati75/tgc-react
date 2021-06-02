import React from 'react';

class NumberBox extends React.Component {
    state = {
        count: this.props.initialValue,
        message: "abc"
    }

    click = () => {
        alert("clicked");
    }

    hover = () => {
        this.setState({
            message: "Tickle Me!"
        })
    }

    resetMsg = () => {
        this.setState({
            message: "abc-reset"
        })
    }

    render() {
        return (
            <React.Fragment>
                <div onClick={this.click} onMouseOver={this.hover} onMouseOut={this.resetMsg} style={{
                    border: "3px dashed blue",
                    padding: "10px",
                    height: "20px"
                }}>{this.state.count} {this.state.message}</div>
            </React.Fragment>
        )
    }
}

export default NumberBox;